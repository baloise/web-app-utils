# @baloise/web-app-pipes-angular

[![Continuous](https://github.com/baloise/web-app-utils/actions/workflows/continuous.yml/badge.svg?branch=master)](https://github.com/baloise/web-app-utils/actions/workflows/continuous.yml)
[![Release](https://github.com/baloise/web-app-utils/actions/workflows/release.yml/badge.svg?branch=master)](https://github.com/baloise/web-app-utils/actions/workflows/release.yml)
![npm](https://img.shields.io/npm/v/@baloise/web-app-pipes-angular)
![npm bundle size](https://img.shields.io/bundlephobia/min/@baloise/web-app-pipes-angular)
![npm](https://img.shields.io/npm/dt/@baloise/web-app-pipes-angular)
![GitHub](https://img.shields.io/github/license/baloise/web-app-utils)
![GitHub issues](https://img.shields.io/github/issues/baloise/web-app-utils)

## Installation

```bash
npm install @baloise/web-app-pipes-angular
```

## Usage

The pipe functions are defined as [Angular Pipes](https://angular.io/guide/pipes).

```html
<span>{{ 'baloise' | balCapitalize }}</span>
```

The can be used in the component typescript file aswell.

```typescript
import { Component } from '@angular/core'
import { balCapitalize } from '@baloise/web-app-pipes-angular'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  capitalize(value: string) {
    return balCapitalize(value)
  }
}
```
