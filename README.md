# @baloise/web-app-utils

Javascript utilities for Baloise Web Applications.

[![Continous](https://github.com/baloise/web-app-utils/actions/workflows/continous.yml/badge.svg?branch=master)](https://github.com/baloise/web-app-utils/actions/workflows/continous.yml)
[![Release](https://github.com/baloise/web-app-utils/actions/workflows/release.yml/badge.svg?branch=master)](https://github.com/baloise/web-app-utils/actions/workflows/release.yml)

![npm](https://img.shields.io/npm/v/@baloise/web-app-utils)
![npm bundle size](https://img.shields.io/bundlephobia/min/@baloise/web-app-utils)
![npm](https://img.shields.io/npm/dt/@baloise/web-app-utils)
![GitHub](https://img.shields.io/github/license/baloise/web-app-utils)
![GitHub issues](https://img.shields.io/github/issues/baloise/web-app-utils)

## Installation guide

### Using npm

```bash
npm i @baloise/web-app-utils
```

## Table of Content

- [Language Utils](#language-utils)
- [Browser Utils](#browser-utils)
- [Integration Utils](#integration-utils)
- [Common Model Utils](#common-model-utils)

## Language Utils

The language utils helps to list the common languages and to detect the correct ones.

### LanguageModel

#### `valueOf`

Returns the Language of the given language key or if the lauage is not registered it returns undefined.

**Signature**
`valueOf(key: string): Language | undefined`

**Example**

```typescript
const language = LanguageModel.valueOf("de");
if (language === undefined) {
  // language is not registered
}
```

#### `valueOfOrDefault`

Returns the Language of the given language key or if the language is not registered it returns the default one.

**Signature**
`valueOfOrDefault(key: string): Language`

**Example**

```typescript
const language = LanguageModel.valueOfOrDefault("de");
```

#### `isValidKey`

Verifies if the given language key is registered as a supported language or not.

**Signature**
`isValidKey(key: string): boolean`

**Example**

```typescript
if (LanguageModel.isValidKey("de")) {
  // language key is valid
} else {
  // language key is not valid
}
```

#### Languages

We provide various set of language list for our supported countries. Those Languages have the type `LanguageModel`.

##### `LanguagesOfSwitzerland`

List of german, french, italien & english with the default language german.

**Example**

```typescript
LanguagesOfSwitzerland.isValidKey("de"); // true
LanguagesOfSwitzerland.isValidKey("be"); // false
```

##### `LanguagesOfGermany`

List of german & english with the default language german.

##### `LanguagesOfBelgium`

List of dutch, french, italien & english with the default language dutch.

##### `LanguagesOfLuxembourg`

List of luxembourgish, french & english with the default language luxembourgish.

#### Language

The language object has only one property the `key` which has the language key like `en`.

## Browser Utils

The browser utils solve some common request when working with the broser api.

> For working with cookies we recommand to use the library [js-cookie](https://www.npmjs.com/package/js-cookie).

> For working with the url we recommand to use the library [query-string](https://www.npmjs.com/package/query-string).

### Functions

#### `scrollToAnchorElement`

Scrolls to the ancor element with the attribute `data-ref="heading"`.

**Signature**
`scrollToAnchorElement(referenceName: string): void`

**Example**

```html
<div data-ref="heading">...</div>
```

```typescript
scrollToAnchorElement("heading");
```

#### `scrollToTopOfBody`

Scrolls to the top of the body.

**Signature**
`scrollToTopOfBody(): void`

#### `open`

Opens a new location in the current tab.

**Signature**
`open(url: string): void`

#### `openInNewWindow`

Opens the new location in a new tab.

**Signature**
`openInNewWindow(url: string): void`

#### `getBrowserLanguage`

Returns the main language key. For example if the browser has the language `de-CH` this function return the language key `de`, so we can use our `LangaugeModel`.

**Signature**
`getBrowserLanguage(): string`

**Example**

```typescript
const langKey = getBrowserLanguage()
if(LanguagesOfSwitzerland.isValidKey(langKey)) { ... }
...
```

#### `disableDragAndDropFiles`

Disables for the whole web application drag and drop.

**Signature**
`disableDragAndDropFiles(): void`

#### `getBrowserInfo`

Returns some useful information from the browser.

**Signature**
`getBrowserInfo(): BrowserInfo`

```typescript
interface BrowserInfo {
  cookiesEnabled?: boolean;
  language?: string;
  timezone?: string;
  userAgent?: string;
}
```

## Integration Utils

The integration utils helps to work with our integration tools like one trust.

### `loadOneTrustBaloiseSwitzerland`

Loads the one trust script directly from our main cms system with the necessary parameters.

**Signature**
`loadOneTrustBaloiseSwitzerland(): void`

## Common Model Utils

Some useful models to use in the daily business.

### RequestState

The `RequestState` enum helps to have a state variable to show the current stand of an api call.

```typescript
export enum RequestState {
  INIT,
  RUNNING,
  SUCCESS,
  ERROR,
}
```

**Example (Angular)**

```typescript
import { Component, OnInit } from "@angular/core";
import { RequestState } from "@baloise/web-app-utils";
import {
  ConfirmEmailService,
  EmailConfirmationResponse,
} from "../confirm-email.service";

@Component({
  selector: "confirm-email-page",
  templateUrl: "./confirm-email.page.component.html",
  styleUrls: ["./confirm-email.page.component.scss"],
})
export class ConfirmEmailPageComponent implements OnInit {
  confirmEmailResponse: EmailConfirmationResponse;
  requestState: RequestState = RequestState.INIT;

  constructor(private confirmEmailService: ConfirmEmailService) {}

  confirmEmail() {
    this.requestState = RequestState.RUNNING;
    this.confirmEmailService
      .confirmEmail()
      .toPromise()
      .then((resp) => {
        this.requestState = RequestState.SUCCESS;
        this.confirmEmailResponse = resp;
      })
      .catch(() => {
        this.requestState = RequestState.ERROR;
      });
  }
}
```
