# @baloise/web-app-utils

[![Continuous](https://github.com/baloise/web-app-utils/actions/workflows/continuous.yml/badge.svg?branch=master)](https://github.com/baloise/web-app-utils/actions/workflows/continuous.yml)
[![Release](https://github.com/baloise/web-app-utils/actions/workflows/release.yml/badge.svg?branch=master)](https://github.com/baloise/web-app-utils/actions/workflows/release.yml)
![npm](https://img.shields.io/npm/v/@baloise/web-app-utils)
![npm bundle size](https://img.shields.io/bundlephobia/min/@baloise/web-app-utils)
![npm](https://img.shields.io/npm/dt/@baloise/web-app-utils)
![GitHub](https://img.shields.io/github/license/baloise/web-app-utils)
![GitHub issues](https://img.shields.io/github/issues/baloise/web-app-utils)

Javascript utilities for Baloise Web Applications.

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
- [Common Utils](#common-utils)

## Language Utils

The language utils helps to list the common languages and to detect the correct ones.

### LanguageModel

#### `valueOf`

Returns the Language of the given language key or if the lauage is not registered it returns undefined.

**Signature**
`valueOf(key: string): Language | undefined`

**Example**

```typescript
const language = LanguageModel.valueOf('de')
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
const language = LanguageModel.valueOfOrDefault('de')
```

#### `isValidKey`

Verifies if the given language key is registered as a supported language or not.

**Signature**
`isValidKey(key: string): boolean`

**Example**

```typescript
if (LanguageModel.isValidKey('de')) {
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
LanguagesOfSwitzerland.isValidKey('de') // true
LanguagesOfSwitzerland.isValidKey('be') // false
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
scrollToAnchorElement('heading')
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
  cookiesEnabled?: boolean
  language?: string
  timezone?: string
  userAgent?: string
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
import { Component, OnInit } from '@angular/core'
import { RequestState } from '@baloise/web-app-utils'
import { ConfirmEmailService, EmailConfirmationResponse } from '../confirm-email.service'

@Component({
  selector: 'confirm-email-page',
  templateUrl: './confirm-email.page.component.html',
  styleUrls: ['./confirm-email.page.component.scss'],
})
export class ConfirmEmailPageComponent implements OnInit {
  confirmEmailResponse: EmailConfirmationResponse
  requestState: RequestState = RequestState.INIT

  constructor(private confirmEmailService: ConfirmEmailService) {}

  confirmEmail() {
    this.requestState = RequestState.RUNNING
    this.confirmEmailService
      .confirmEmail()
      .toPromise()
      .then(resp => {
        this.requestState = RequestState.SUCCESS
        this.confirmEmailResponse = resp
      })
      .catch(() => {
        this.requestState = RequestState.ERROR
      })
  }
}
```

# Common Utils

<!-- generated content -->

## API

### areArraysEqual

`areArraysEqual(a: any, b: any) => boolean`

Returns `true` if the arrays are equal

```typescript
areArraysEqual(['a', 'b'], ['b', 'a']) // true
```

### now

`now() => Date`

Returns a JS Date instance of the exact moment

```typescript
const date = now()
// Wed Mar 10 2021 20:30:32 GMT+0100 (Central European Standard Time)
```

### today

`today() => Date`

Returns a JS Date instance of today with time being set to 0

```typescript
const date = today()
// Wed Mar 10 2021 00:00:00 GMT+0100 (Central European Standard Time)
```

### floorTime

`floorTime(date: Date) => Date`

Returns a JS Date instance with time being set to 0

```typescript
const date = floorTime(new Date())
// Wed Mar 10 2021 00:00:00 GMT+0100 (Central European Standard Time)
```

### ceilTime

`ceilTime(date: Date) => Date`

Returns a JS Date instance with the time set to the possible end

```typescript
const date = ceilTime(new Date())
```

### year

`year(date: any) => number`

Returns the year number of the given date

```typescript
year(new Date(2020, 0, 1)) // 2020
```

### month

`month(date: any) => number`

Returns the month number of the given date

```typescript
month(new Date(2020, 0, 1)) // 0
```

### day

`day(date: any) => number`

Returns the day number of the given date

```typescript
day(new Date(2020, 0, 1)) // 1
```

### increaseYear

`increaseYear(date: Date, years: number) => number`

Increases the year of a date and retunrs the result

```typescript
increaseYear(new Date(2020, 0, 1), 1) // 2021
```

### decreaseYear

`decreaseYear(date: Date, years: number) => number`

Decreases the year of a date and retunrs the result

```typescript
decreaseYear(new Date(2020, 0, 1), 1) // 2019
```

### isBefore

`isBefore(date: any, beforeDate: any) => boolean`

Returns `true` when the given date is not smaller than the before date.

```typescript
isBefore(new Date(2020, 1, 1), new Date(2020, 3, 1)) // true
```

### isAfter

`isAfter(date: any, afterDate: any) => boolean`

Returns `true` when the given date is not smaller than the before date.

```typescript
isAfter(new Date(2020, 5, 1), new Date(2020, 3, 1)) // true
```

### isInRange

`isInRange(date: any, minDate: any, maxDate: any) => boolean`

Returns `true` when the given date is not smaller than the minDate and not bigger than the maxDate.

```typescript
isInRange(new Date(2020, 1, 1), new Date(2020, 0, 1), new Date(2020, 2, 1)) // true
```

### getFirstDayOfTheWeek

`getFirstDayOfTheWeek(date: Date) => Date`

Returns the first day of the week of the given date.

### isSameYear

`isSameYear(a: Date, b: Date) => boolean`

Returns `true` when the year of the dates are the same

### isSameMonth

`isSameMonth(a: Date, b: Date) => boolean`

Returns `true` when the month of the dates are the same

### isSameDay

`isSameDay(a: Date, b: Date) => boolean`

Returns `true` when the day of the dates are the same

### isSameWeek

`isSameWeek(a: Date, b: Date) => boolean`

Returns `true` when the week of the dates are the same

### format

`format(value: any) => string`

Transforms the ISO datestring into `dd.mm.yyyy`

```typescript
format('2020-12-02') // '02.12.2020'
```

### isoString

`isoString(date: any) => string`

Returns the ISO string `yyyy-mm-dd` of the given date

```typescript
isoString(new Date(2020, 0, 13)) // '2020-01-13'
```

### newDateString

`newDateString(date: Date) => string`

Returns the ISO string `yyyy-mm-dd` of the given date

```typescript
newDateString(new Date(2020, 0, 13)) // '2020-01-13'
```

### newDateString

`newDateString(year: number, month: number, day: number) => string`

Returns the ISO string `yyyy-mm-dd` of the given parameters year, month and day

```typescript
newDateString(2020, 0, 13) // '2020-01-13'
```

### newDateString

`newDateString(yearOrDate: any, month: number, day: number) => string`

### toDate

`toDate(datestring: any) => any`

Turns the ISO string `yyyy-mm-dd` it a JS Date instance

```typescript
toDate('2020-01-13') // js date instance
```

### isValidDateString

`isValidDateString(datestring: any) => boolean`

Returns `true` if the given datestring is valid

```typescript
isValidDateString('2020-01-13') //true
isValidDateString('2020-01-0') //false
isValidDateString('') //false
isValidDateString('1899-01-0') //false
```

### isValidDate

`isValidDate(value: any) => boolean`

Returns `true` if the given date is valid

### isEmpty

`isEmpty(value: any) => boolean`

Returns `true` if the value is empty

### isEnterKey

`isEnterKey(event: KeyboardEvent) => boolean`

Returns `true` if the keyboard event was triggered by the `Enter` key

### isSpaceKey

`isSpaceKey(event: KeyboardEvent) => boolean`

Returns `true` if the keyboard event was triggered by the `Space` key

### isEscapeKey

`isEscapeKey(event: KeyboardEvent) => boolean`

Returns `true` if the keyboard event was triggered by the `Escape` key

### isBackspaceKey

`isBackspaceKey(event: KeyboardEvent) => boolean`

Returns `true` if the keyboard event was triggered by the `Backspace` key

### isArrowDownKey

`isArrowDownKey(event: KeyboardEvent) => boolean`

Returns `true` if the keyboard event was triggered by the `ArrowDown` key

### isArrowUpKey

`isArrowUpKey(event: KeyboardEvent) => boolean`

Returns `true` if the keyboard event was triggered by the `ArrowUp` key

### isValidMonetaryNumber

`isValidMonetaryNumber(stringValue: string) => boolean`

Returns `true` if the arrays are equal

```typescript
isValidMonetaryNumber(`1'000.99`) // true
```
