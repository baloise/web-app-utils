# @baloise/web-app-unsupported-browsers

[![Continuous](https://github.com/baloise/web-app-utils/actions/workflows/continuous.yml/badge.svg?branch=master)](https://github.com/baloise/web-app-utils/actions/workflows/continuous.yml)
[![Release](https://github.com/baloise/web-app-utils/actions/workflows/release.yml/badge.svg?branch=master)](https://github.com/baloise/web-app-utils/actions/workflows/release.yml)
![npm](https://img.shields.io/npm/v/@baloise/web-app-unsupported-browsers)
![npm bundle size](https://img.shields.io/bundlephobia/min/@baloise/web-app-unsupported-browsers)
![npm](https://img.shields.io/npm/dt/@baloise/web-app-unsupported-browsers)
![GitHub](https://img.shields.io/github/license/baloise/web-app-utils)
![GitHub issues](https://img.shields.io/github/issues/baloise/web-app-utils)

This script verifies if the users browser is supported by the Baloise applications and if not it redirects directly to the static unsupported-browsers pages.

## Installation

Fist we install the javascript package with npm.

```bash
npm install @baloise/web-app-unsupported-browsers
```

The javascript file needs to be served as a static file therefore use the package copyfiles

```bash

npm install copyfiles --save-dev
```

After installing our copyfiles dependency we need to define the copy command in our package.json file.
Add a new script called copy:script and adjust the second path to your application.

Then we add the defined script copy:script in our postinstall script.
Every time we install dependencies the copy:fonts script gets executed at the end.

```json
"scripts": {
  "postinstall": "npm run copy:script",
  "copy:script": "copyfiles --flat node_modules/@baloise/web-app-unsupported-browsers/dist/* public/assets/js"
}
```

Lets add the script to the head of the entry html page.

```html
<head>
  ...
  <script
    src="public/assets/js/baloise-unsupported-browsers.js"
    data-location="ch"
  ></script>
</head>
```

## Attributes

The script supports two attributes:

- **data-location**
  - default is `ch`
  - possible values are `ch`,`be`,`lu` and `de`
- **data-language**
  - default is browser-language if supported and if not then the default of the location
    - **ch** would be `de`
    - **be** would be `fr`
    - **lu** would be `fr`
    - **de** would be `de`
