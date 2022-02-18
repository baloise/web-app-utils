# @baloise/web-app-pipes

[![Continuous](https://github.com/baloise/web-app-utils/actions/workflows/continuous.yml/badge.svg?branch=master)](https://github.com/baloise/web-app-utils/actions/workflows/continuous.yml)
[![Release](https://github.com/baloise/web-app-utils/actions/workflows/release.yml/badge.svg?branch=master)](https://github.com/baloise/web-app-utils/actions/workflows/release.yml)
![npm](https://img.shields.io/npm/v/@baloise/web-app-pipes)
![npm bundle size](https://img.shields.io/bundlephobia/min/@baloise/web-app-pipes)
![npm](https://img.shields.io/npm/dt/@baloise/web-app-pipes)
![GitHub](https://img.shields.io/github/license/baloise/web-app-utils)
![GitHub issues](https://img.shields.io/github/issues/baloise/web-app-utils)

## Installation

```bash
npm install @baloise/web-app-pipes
```

## Usage

Use pipe function to transform any kind of data to a display format.
The pipe are simple functions which always return a string.
Just import the function and use it to transform data in to readable strings.

- [Angular usage of pipes](../pipes-angular/README.md)
- [Vue usage of pipes](../pipes-vue/README.md)

```typescript
import { balCapitalize } from '@baloise/web-app-pipes'

balCapitalize('baloise')
// returns 'Baloise'
```

## Usage examples

- [Angular usage of pipes](/components/getting-started/angular/usage.html#pipes)
- [Vue usage of pipes](/components/getting-started/vue/usage.html#filters)

<!-- generated content -->

## API

### balBlobToUrl

`balBlobToUrl(value: Blob) => string`

Transforms the given blob parameter to object URL string.

For more information look up the documentation about
[URL.createObjectURL](https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL)

### balCapitalize

`balCapitalize(value: any) => string`

Transforms the given string parameter to capitalize string.

```typescript
balCapitalize('baloise') // Baloise
```

### balClaimNumber

`balClaimNumber(value: any) => string`

Transforms the given string into the correct claim-number format.

```typescript
balClaimNumber('73001217169') // 73/001217/16.9
```

### balContractNumber

`balContractNumber(value: any) => string`

Transforms the given string into the correct police-number format.

```typescript
balContractNumber('501222333') // 50/1.222.333
```

### balCurrency

`balCurrency(value: any, currencySign: any, showZero: any, decimalLength: any) => string`

Formats the number into a human readable currency string.

```typescript
balCurrency(1234567.89) // 1'234'567.89
```

### balDateString

`balDateString(value: any) => string`

Transforms the given string parameter to capitalize string.

```typescript
balDateString(new Date(2022, 11, 31)) // '2022-12-31'
```

### balDefaultString

`balDefaultString(value: any, defaultString: any) => string`

If the value is empty it shows a dash ('-').

```typescript
balDefaultString('') // -\n
balDefaultString('text') // text
```

### balFileSize

`balFileSize(value: number) => string`

Transforms the filesize in human readable string.

```typescript
balFileSize(86956565) // 82.9 MB
```

### balHighlight

`balHighlight(value: string, search: string, cssClass: any) => string`

Transforms the given text into a highlighted html content.

```typescript
balHighlight('Some Text') // <span class="bal-highlight">Some Text</span>
```

### balJoinArray

`balJoinArray(value: any, delimiter: any) => string`

Transforms the given string array in to a string.

```typescript
balJoinArray(['Apple', 'Potato', 'Bacon']) // Apple, Potato, Bacon
```

### balLimit

`balLimit(value: any, limit: any) => string`

Limits the input string.

```typescript
balLimit('Some string that is ways to long to be rendered') // Some string that is ...
```

### balOfferNumber

`balOfferNumber(value: any, varianteNr: string) => string`

Transforms the input string into a offer number.

```typescript
balOfferNumber('987654321') // 98/7.654.321
```

### balPhoneNumber

`balPhoneNumber(value: any) => string`

Formats the given phone.

```typescript
balPhoneNumber('41,41564410808') // +41 56 441 08 08
balPhoneNumber({ countryCode: '41', phoneNumber: '564410808' }) // +41 56 441 08 08
```
