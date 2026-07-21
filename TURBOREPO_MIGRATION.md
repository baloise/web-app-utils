# Migration Plan: Lerna → Turborepo + Changesets

## Goal & Rationale

Move `web-app-utils` off **Lerna** onto **Turborepo** (task running) + **Changesets**
(versioning & publishing).

The driver is **dependency footprint**: modern `lerna` depends on `nx`, which drags a
large transitive tree (`@nrwl/*`, native platform binaries) into `node_modules`. We want a
leaner toolchain. This is a **lateral migration** — minimize blast radius, do **not**
re-architect the release model.

## Locked Decisions

| # | Decision | Choice |
|---|----------|--------|
| 1 | Task runner | **Turborepo** — replaces only Lerna's task-running (`build`, `test`) |
| 2 | Publishing | **Changesets** — replaces `lerna publish` |
| 3 | Versioning mode | **Fixed / locked** — all 10 packages bump together, stay on the `3.17.x` line |
| 4 | Internal deps | **Keep semver ranges** (`^3.17.4`) — no `workspace:*`, no package.json churn |
| 5 | Caching | **Local only** — no Vercel, no `TURBO_TOKEN`, no remote cache |
| 6 | Release CI style | **Manual `workflow_dispatch`** — keep the current one-button patch/minor/major flow |
| 7 | Lint | **Per-package Turbo task** — `turbo run lint` fans out; matches sibling repo |

**Scope rule:** Turbo runs `build`, `test`, and `lint`. `format` and `docs` stay as-is as
plain root scripts.

> **Note on lint:** originally kept as a root script, later moved to per-package Turbo tasks
> to match the sibling repo's setup. See "Lint via Turbo" below.

## Package Landscape (facts)

- **Package manager:** npm workspaces (`package-lock.json`, Node 24 / npm 11). Not pnpm/yarn.
- **10 packages** under `packages/*`, all at version `3.17.x` (fixed).
- **Internal dependency graph** (build order matters):
  - `pipes` → `utils`
  - `pipes-vue` → `pipes` → `utils`
  - `pipes-angular` → `pipes` → `utils`
  - `validators` → `utils`
  - `validators-vue` → `validators`, `validators-angular` → `validators`
  - `form-vue`, `clean-architecture`, `unsupported-browsers` — leaf/standalone
- **Tests need built deps:** jest uses `ts-jest` with **no `moduleNameMapper`**, so internal
  imports resolve through the symlinked package's `main: ./dist/index.js`. Therefore
  `test` **must** depend on `^build`.

---

## Lerna Touchpoint → Replacement Map

| Current (Lerna) | Replacement |
|---|---|
| `lerna run build` | `turbo run build` |
| `lerna run test` | `turbo run test` |
| `lerna run update:registry` (inside root `update:registry`) | native `npm run update:registry --workspaces --if-present` (not Turbo — non-cacheable sed) |
| `lerna exec -- npm install --package-lock-only` (`update:lock`) | native `npm install --package-lock-only` |
| `lerna publish --conventional-commits ...` (`release`) | `changeset version` + `changeset publish` |
| `lerna publish prepatch --canary ...` (`release:canary`) | `changeset version --snapshot beta` + `changeset publish --tag beta --no-git-tag` |
| `lerna` + `nx` in devDependencies | **removed** |
| `lerna.json` | **deleted** |

---

## Implementation Steps

### 1. Add Turborepo

Install:

```bash
npm install --save-dev turbo
```

Turbo 2.x requires a package-manager declaration. Add to root `package.json`:

```json
"packageManager": "npm@11.9.0"
```

Create `turbo.json` at the repo root:

```json
{
  "$schema": "https://turbo.build/schema.json",
  "ui": "tui",
  "globalDependencies": [".eslintrc.js", ".prettierrc"],
  "tasks": {
    "build": {
      "dependsOn": ["^build"],
      "inputs": ["$TURBO_DEFAULT$", "!**/*.spec.*", "!**/*.test.*", "!**/*.e2e.*"],
      "outputs": ["dist/**", "dist-transpiled/**"]
    },
    "test": {
      "dependsOn": ["^build"],
      "outputs": []
    },
    "lint": {
      "outputs": []
    },
    "update:registry": {
      "cache": false
    }
  }
}
```

Why these settings (differs from the sibling design-system repo's `turbo.json`):
- `outputs` keeps **both** `dist/**` and `dist-transpiled/**` — 5 packages (pipes, pipes-vue,
  utils, validators, validators-vue) emit `dist-transpiled`. The sibling repo only has `dist`.
- `build.inputs` uses `$TURBO_DEFAULT$` (Turbo's normal per-package file hashing) minus test
  files, so editing a spec doesn't bust the build cache **and** editing `rollup.config.js` /
  `tsconfig.json` / `.build/*` still does. (The sibling repo's literal `src/**` would miss
  config changes — a correctness hole avoided here.)
- **No `globalEnv`** — grep confirms zero `process.env` usage in build scripts; the sibling
  repo's `BAL_/DS_*` vars don't exist in this repo.
- `globalDependencies` lists the **root** `.eslintrc.js` / `.prettierrc` because this repo
  uses a single shared config (ESLint 8 legacy). Without this, Turbo's per-package hashing
  wouldn't see the root config and a rule change wouldn't invalidate lint caches.

Notes:
- `build` runs in topological order and caches `dist/**` + `dist-transpiled/**`.
- `test` depends on `^build` because tests import internal packages from their built `dist`.
- Each package's multi-step `build` (`banner` → `build:clean` → `build:docs`/`build:index`
  → `build:compile` → `build:bundle`) stays as-is inside the package `build` script;
  Turbo only orchestrates the top-level `build` per package.
- **Verify generated outputs:** `build:docs` / `build:index` / `banner` generate files.
  Confirm where they land. If any land **outside** `dist/` (e.g. committed docs or a
  generated `index.ts` in `src/`), either add those paths to `outputs`, or accept that
  they are non-cached side effects. If docs are committed to the repo (see release.yml
  "update build artifacts" step), they are handled by the release job, not Turbo caching.

Add `.turbo/` to `.gitignore`.

### 2. Add Changesets

Install:

```bash
npm install --save-dev @changesets/cli
npx changeset init
```

Configure `.changeset/config.json` for **fixed** versioning and public publishing:

```json
{
  "$schema": "https://unpkg.com/@changesets/config@3.0.0/schema.json",
  "changelog": "@changesets/cli/changelog",
  "commit": false,
  "fixed": [
    [
      "@baloise/web-app-utils",
      "@baloise/web-app-pipes",
      "@baloise/web-app-pipes-vue",
      "@baloise/web-app-pipes-angular",
      "@baloise/web-app-validators",
      "@baloise/web-app-validators-vue",
      "@baloise/web-app-validators-angular",
      "@baloise/web-app-form-vue",
      "@baloise/web-app-clean-architecture",
      "@baloise/web-app-unsupported-browsers"
    ]
  ],
  "access": "public",
  "baseBranch": "master",
  "updateInternalDependencies": "patch",
  "ignore": []
}
```

> **Action:** verify the exact 10 package names from each `packages/*/package.json` before
> committing this list. The names above are inferred and must match exactly.

Because versioning is **fixed**, one changeset bumps every package together — matching
today's Lerna behavior. Internal dependency ranges (`^3.17.4`) are rewritten automatically
by `changeset version`.

### 3. Update root `package.json` scripts

Replace the Lerna-backed scripts:

```jsonc
{
  "scripts": {
    "build": "turbo run build",
    "test": "turbo run test",
    "update:lock": "npm install --package-lock-only",
    "update:registry": "npm run update:registry --workspaces --if-present && sed -i -e \"s#jfrog.balgroupit.com/artifactory/api/npm/npm#registry.npmjs.org#g\" package-lock.json",

    // lint:check now fans out via Turbo (see "Lint via Turbo" below):
    "lint:check": "turbo run lint",
    // lint (fix) stays a root script — fixing mutates files, not cacheable:
    "lint": "eslint --ext .tsx,.ts packages/ --fix",

    // unchanged (NOT routed through Turbo):
    "format:check": "prettier --check ./packages",
    "format": "prettier --write ./packages",
    "docs": "node ./.build/docs.js",

    // new:
    "changeset": "changeset",
    "version-packages": "changeset version",
    "release": "changeset publish"
  }
}
```

Remove `lerna` and `nx` from `devDependencies`. Delete `lerna.json`.

### Lint via Turbo

Each of the 10 packages gets a `lint` script:

```json
"lint": "eslint --ext .ts,.tsx --no-error-on-unmatched-pattern src/"
```

- Scoped to `src/` (avoids linting `dist/`). ESLint 8 walks up and finds the shared root
  `.eslintrc.js` automatically — no per-package config needed.
- `--no-error-on-unmatched-pattern` is required because `unsupported-browsers` is pure
  JavaScript (0 `.ts/.tsx` files); without the flag ESLint exits non-zero on an empty match.
  This preserves the original root command's behavior (it only ever linted `.ts/.tsx`).
- The root `.eslintrc.js` / `.prettierrc` are declared in `turbo.json` `globalDependencies`
  so a shared-config change invalidates every package's lint cache.

### 4. Rewrite `.github/workflows/release.yml` (manual dispatch preserved)

Keep the `workflow_dispatch` with the `patch | minor | major` choice. Instead of
`lerna publish <level>`, generate a changeset for the chosen level, version, build, then
publish.

```yaml
name: Release

on:
  workflow_dispatch:
    inputs:
      version:
        type: choice
        description: 'Version level'
        required: true
        default: 'patch'
        options: [patch, minor, major]

jobs:
  Publish:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: '0'

      - uses: actions/setup-node@v4
        with:
          node-version: '24.x'
          registry-url: 'https://registry.npmjs.org'

      - name: Git Identity
        run: |
          git config --global user.name 'baopso'
          git config --global user.email 'Group.CH_Open-Source@baloise.ch'
          git remote set-url origin https://$GITHUB_ACTOR:$GITHUB_TOKEN@github.com/$GITHUB_REPOSITORY
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}

      - name: Fetch all Tags and Pull
        run: |
          git fetch --depth=1 origin +refs/tags/*:refs/tags/*
          git pull

      - name: Update npm registry
        run: npm run update:registry

      - name: Install dependencies
        run: npm ci

      # Generate a changeset for the chosen bump level covering all fixed packages.
      # (Fixed mode: one entry propagates to the whole group.)
      - name: Create release changeset
        run: |
          mkdir -p .changeset
          cat > .changeset/manual-release.md <<EOF
          ---
          "@baloise/web-app-utils": ${{ github.event.inputs.version }}
          ---

          Manual ${{ github.event.inputs.version }} release.
          EOF

      - name: Version packages
        run: npx changeset version

      - name: Build
        run: npm run build

      - name: Documentation
        run: npm run docs

      - uses: EndBug/add-and-commit@v9
        with:
          message: 'chore(release): version packages and update build artifacts'
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}

      - name: Publish to NPM
        run: npx changeset publish
        env:
          NODE_AUTH_TOKEN: ${{ secrets.NPM_PUBLISH_TOKEN }}
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}

      - name: Update Lock files
        run: npm run update:lock

      - uses: EndBug/add-and-commit@v9
        with:
          message: 'chore(): update lock files'
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

Notes:
- `changeset publish` pushes git tags and publishes only packages whose version isn't
  already on the registry — safe and idempotent.
- The `update:registry` step still rewrites the internal Jfrog/Nexus registry to
  `registry.npmjs.org` in the lockfile before install, preserved from today.
- The synthetic changeset approach keeps the **one-button manual** UX. Contributors do
  **not** need to author changeset files for the normal release. (If you later want
  per-PR changelog granularity, switch to authored changeset files — out of scope here.)

### 5. Rewrite `release:canary` → snapshot release

Replace the `lerna publish prepatch --canary --preid beta` script with a Changesets
snapshot flow (run manually or in a canary workflow):

```bash
# requires at least one changeset present, or a synthetic one as in release.yml
npx changeset version --snapshot beta
npm run build
npx changeset publish --tag beta --no-git-tag
```

Snapshot versions look like `3.17.5-beta-20260721120000`. This is the Changesets
equivalent of Lerna canary; the exact format differs from Lerna's but the intent (beta
dist-tag, throwaway version) is preserved.

### 6. `continuous.yml` — optional cache tweak

`continuous.yml` needs **no functional change** — `npm run build` / `npm run test` now go
through Turbo transparently. Optionally add `.turbo/` to the existing `actions/cache` step
to speed up CI incremental builds (still local-cache, no third-party service):

```yaml
      - name: Restore turbo + node_modules cache
        uses: actions/cache@v4
        with:
          path: |
            node_modules
            */*/node_modules
            .turbo
          key: ${{ runner.os }}-${{ hashFiles('**/package-lock.json') }}
```

---

## Verification Checklist

- [ ] `npm ci` clean install; confirm `nx` and `lerna` no longer in `node_modules`.
- [ ] `npm run build` — all 10 packages build in correct topological order.
- [ ] Second `npm run build` — Turbo reports `FULL TURBO` (cache hit).
- [ ] `npm run test` — passes; confirm internal-dep packages resolve from `dist/`.
- [ ] `npm run format:check` — unchanged, still passes on an LF checkout.
- [ ] `npm run lint:check` (now `turbo run lint`) — fans out to all 10 packages; passes on
      an LF checkout. (Locally on a CRLF/Windows checkout it reports `Delete ␍` errors — a
      pre-existing line-ending issue, not caused by this migration; CI on Ubuntu is unaffected.)
- [ ] `npm run docs` — unchanged, still generates.
- [ ] `npx changeset version` (dry, on a scratch branch) — all 10 packages bump together
      to the same version; internal `^` ranges updated in lockstep.
- [ ] Confirm generated `build:docs` / `build:index` outputs are either in `dist/**` or
      handled by the release commit step (not silently dropped by caching).
- [ ] Dry-run the release workflow on a fork/scratch tag before first real publish.

## Rollback

The migration is contained to: `turbo.json`, `.changeset/`, root `package.json`,
`release.yml`, and deletion of `lerna.json`. To roll back, restore those files from git and
`npm install` — no package source or published-artifact changes are involved.

## Explicitly Out of Scope

- Moving to independent versioning (kept fixed).
- `workspace:*` protocol (kept semver ranges).
- Remote/Vercel caching (local only).
- `format` as a Turbo task (kept as root Prettier script; lint already covers formatting via
  `eslint-plugin-prettier`). Only **lint** was moved to Turbo.
- Changesets bot / auto "Version Packages" PR flow (kept manual dispatch).
- Dropping `commitlint` — harmless to keep; no longer drives versioning. Decide separately.
