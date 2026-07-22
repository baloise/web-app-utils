import baseConfig from '../../rollup.base.js'

// Externalize all runtime deps (all are peerDependencies) — including yup subpaths
// like 'yup/lib/locale' — and any @baloise/* package.
const externals = ['vue', 'yup', 'vee-validate']

export default {
  ...baseConfig,
  external: id => externals.some(m => id === m || id.startsWith(`${m}/`)) || id.startsWith('@baloise/'),
}
