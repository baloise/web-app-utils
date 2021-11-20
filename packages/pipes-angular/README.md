# Angular Pipes

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
