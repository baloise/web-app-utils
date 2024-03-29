# Web App Utilities

[![Continuous](https://github.com/baloise/web-app-utils/actions/workflows/continuous.yml/badge.svg?branch=master)](https://github.com/baloise/web-app-utils/actions/workflows/continuous.yml)
[![Release](https://github.com/baloise/web-app-utils/actions/workflows/release.yml/badge.svg?branch=master)](https://github.com/baloise/web-app-utils/actions/workflows/release.yml)
![GitHub](https://img.shields.io/github/license/baloise/web-app-utils)
![GitHub issues](https://img.shields.io/github/issues/baloise/web-app-utils)

## About

A collection of utilities for Baloise web applications.

- [Utils](./packages/utils/README.md)
- [Pipes](./packages/pipes/README.md)
- [Validators](./packages/validators/README.md)
- [Unsupported Browsers](./packages/unsupported-browsers/README.md)
- [Clean Architecture](./packages/clean-architecture/README.md)
- [Form Vue](./packages/form-vue/README.md)

## Table of Content

- [Packages](#packages)
- [Contributing](#contributing)

## Packages

| Library                                                                                                                               | Status                                                                     | Description                                                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [@baloise/web-app-utils](https://github.com/baloise/web-app-utils/blob/master/packages/utils/README.md)                               | ![npm](https://img.shields.io/npm/v/@baloise/web-app-utils)                | A collection of JavaScript utilities like simple functions, models and integration logic.                                                                     |
| [@baloise/web-app-pipes](https://github.com/baloise/web-app-utils/blob/master/packages/pipes/README.md)                               | ![npm](https://img.shields.io/npm/v/@baloise/web-app-pipes)                | A collection of pipe function to transform raw values in a certain format.                                                                                    |
| [@baloise/web-app-pipes-angular](https://github.com/baloise/web-app-utils/blob/master/packages/pipes-angular/README.md)               | ![npm](https://img.shields.io/npm/v/@baloise/web-app-pipes-angular)        | Proxy package for angular applications.                                                                                                                       |
| [@baloise/web-app-pipes-vue](https://github.com/baloise/web-app-utils/blob/master/packages/pipes-vue/README.md)                       | ![npm](https://img.shields.io/npm/v/@baloise/web-app-pipes-vue)            | Proxy package for vue applications.                                                                                                                           |
| [@baloise/web-app-validators](https://github.com/baloise/web-app-utils/blob/master/packages/validators/README.md)                     | ![npm](https://img.shields.io/npm/v/@baloise/web-app-validators)           | A collection of validator functions.                                                                                                                          |
| [@baloise/web-app-validators-angular](https://github.com/baloise/web-app-utils/blob/master/packages/validators-angular/README.md)     | ![npm](https://img.shields.io/npm/v/@baloise/web-app-validators-angular)   | Proxy package for angular applications.                                                                                                                       |
| [@baloise/web-app-validators-vue](https://github.com/baloise/web-app-utils/blob/master/packages/validators-vue/README.md)             | ![npm](https://img.shields.io/npm/v/@baloise/web-app-validators-vue)       | Proxy package for vue applications.                                                                                                                           |
| [@baloise/web-app-unsupported-browsers](https://github.com/baloise/web-app-utils/blob/master/packages/unsupported-browsers/README.md) | ![npm](https://img.shields.io/npm/v/@baloise/web-app-unsupported-browsers) | This script verifies if the users browser is supported by the Baloise applications and if not it redirects directly to the static unsupported-browsers pages. |
| [@baloise/web-app-clean-architecture](https://github.com/baloise/web-app-utils/blob/master/packages/clean-architecture/README.md) | ![npm](https://img.shields.io/npm/v/@baloise/web-app-clean-architecture) | Utils for clean architecture |
| [@baloise/web-app-form-vue](https://github.com/baloise/web-app-utils/blob/master/packages/form-vue/README.md) | ![npm](https://img.shields.io/npm/v/@baloise/web-app-form-vue) | Components and utils for Vue form creation. |

## Contribution

We gratefully accept contributions to the Baloise Web App Utilites, but expect new feature requests and changes to be approved by the Baloise Web Community before creating a [pull request](https://github.com/baloise/web-app-utils/pulls).

### Introduction

Baloise Web App Utilities is free to use for anybody building a Baloise product or website, and the Baloise community is always working to make it better. Contributors like you help to make Baloise Web App Utilities great, and so we’re glad you’re here.

Contributions are not limited to code. We also encourage feedback, documentation, new designs, and tools.

All you need is a [public GitHub account](https://github.com/) to get started. Most contributions begin with a GitHub issue using one of these templates:

- [Ask a question](https://github.com/baloise/web-app-utils/issues/new?assignees=&labels=question&template=question.md)
- [Report a bug](https://github.com/baloise/web-app-utils/issues/new?assignees=&labels=bug&template=bug-report.md&title=)
- [Request a feature](https://github.com/baloise/web-app-utils/issues/new?assignees=&labels=enhancement&template=feature-request.md&title=)

### Community

#### Users

Users are members of the community who use Baloise Web App Utilities guidelines, assets, and tooling. Anyone can be a user, and we encourage users to participate in the community as much as possible.

#### Contributors

Contributors are members of the community who contribute to Baloise Web App Utilities in a material way. Anyone can be a contributor. In addition to participating as a user, you can also contribute by:

- Reporting bugs or missing features through GitHub issues
- Fixing bugs, adding features, and improving documentation

#### Maintainers

Maintainers are members of the community who are committed to the success of individual Baloise Web App Utilities projects. In addition to their participation as a contributor, maintainers:

- Label, close, and manage GitHub issues
- Close and merge GitHub pull requests

### Workflow

The Baloise Web App Utilities typically use a [fork and pull request workflow](https://docs.github.com/en/get-started/quickstart/contributing-to-projects) for contributions

### Dev Setup

Baloise Web App Utils are divided into multiple NPM packages. Development for all of the packages happens inside one mono repository. Follow the below steps to get the dev environment up and running.

#### Prerequisite - NodeJS

To work with this project a recent LTS version of NodeJS and npm is required. Make sure you've installed and/or updated [Node](https://nodejs.org/en/) before continuing.

### How to's

To start building a new utilities, clone this repo to a new directory:

```bash
git clone https://github.com/baloise/web-app-utils.git web-app-utils
cd web-app-utils
```

- Run `npm install` in the root directory to install all dependencies of the packages
- Run `npm run build` in the root directory to build all packages
- Run `npm run test` in the root directory to run all tests of packages
- Run `npm run docs` in the root directory to generate the api documentation of the utilities

#### Write your own Utility

All our validators are located in the `packages/utils` dir.

##### Getting Started

Navigate into the component package:

```bash
cd packages/utils
```

To run the test use this command:

```bash
npm run test
```

##### Structure

The structure of the utils in the folder `utils` is importend, because out of it the documentation is automatically generate as well as the adapter for our supported frameworks like angular.

The comment block has a short description and an example part for the documentaion.

Each utility function needs to be exported.

````typescript
/**
 * Returns `true` if the arrays are equal
 *
 * ```typescript
 * isValidMonetaryNumber(`1'000.99`) // true
 * ```
 */
export function isValidMonetaryNumber(stringValue: string): boolean {
  // utility logic
  return any
}
````

#### Write your own Validator

All our validators are located in the `packages/validators` dir.

##### Getting Started

Navigate into the component package:

```bash
cd packages/validators
```

Each validator has its own test file.

To run the test use this command:

```bash
npm run test
```

##### Structure

The structure of the validator is importend, because out of it the documentation is automatically generate as well as the adapter for our supported frameworks like angular.

The comment block has a short description and an example part for the documentaion.

The first function receivs the options parameter and the second function gets the value to validate.

````typescript
import { BalValidatorFn } from './validator.type'

/**
 * Returns `true` if the value date is before the given date
 *
 * ```typescript
 * BalValidators.isCustom((value) => value > 2)(3) // true
 * ```
 */
export function isCustom(validatorFn: BalValidatorFn): BalValidatorFn {
  return function (value: any) {
    return validatorFn(value)
  }
}
````

#### Write your own Pipe

All our pipe functions are located in the `packages/pipes` dir.

##### Getting Started

Navigate into the component package:

```bash
cd packages/pipes
```

Each pipe has its own test file.

To run the test use this command:

```bash
npm run test
```

##### Structure

The structure of the pipe function is importend, because out of it the documentation is automatically generate as well as the adapter for our supported frameworks like angular.

The comment block has a short description and an example part for the documentaion.

The pipe are simple functions which always return a string.

````typescript
import { isEmpty } from '@baloise/web-app-utils'
import capitalize from 'lodash.capitalize'

/**
 * Transforms the given string parameter to capitalize string.
 *
 * ```typescript
 * balCapitalize('baloise') // Baloise
 * ```
 */
export function balCapitalize(value: string | null | undefined): string {
  if (isEmpty(value)) {
    return ''
  } else {
    return capitalize(value as string)
  }
}
````

### Release

It is important to follow the [conventional commits](/guide/development/release.html#conventional-commits) rules of the sematic versioning.

Note that the lerna release uses the commit messages to determine the type of changes in the codebase.
The changelog gets generated out of the commit messages.

## Process

1. Create a new git branch.
2. Create a pull request and follow the [conventional commits](/guide/development/release.html#conventional-commits) rules.
3. After merging the github action `.github/release.yml` will release the changes immediately.
   - First it determines the new version out of the git commit messages
   - Then it releases is on npm
   - The changelog is generated out of the git commit messages aswell.

## Conventional Commits

We are following the [Karam Git Message guideliness](http://karma-runner.github.io/5.2/dev/git-commit-msg.html).

Here are some examples of the release type that will be done based on a commit messages:

| Commit message                                                                                                                                                                                   | Release type               |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------- |
| `fix(pencil): stop graphite breaking when too much pressure applied`                                                                                                                             | Patch Release              |
| `feat(pencil): add 'graphiteWidth' option`                                                                                                                                                       | ~~Minor~~ Feature Release  |
| `perf(pencil): remove graphiteWidth option`<br><br>`BREAKING CHANGE: The graphiteWidth option has been removed.`<br>`The default graphite width of 10mm is always used for performance reasons.` | ~~Major~~ Breaking Release |
