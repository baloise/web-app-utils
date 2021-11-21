# @baloise/web-app-validators-angular

[![Continous](https://github.com/baloise/web-app-utils/actions/workflows/continous.yml/badge.svg?branch=master)](https://github.com/baloise/web-app-utils/actions/workflows/continous.yml)
[![Release](https://github.com/baloise/web-app-utils/actions/workflows/release.yml/badge.svg?branch=master)](https://github.com/baloise/web-app-utils/actions/workflows/release.yml)
![npm](https://img.shields.io/npm/v/@baloise/web-app-validators-angular)
![npm bundle size](https://img.shields.io/bundlephobia/min/@baloise/web-app-validators-angular)
![npm](https://img.shields.io/npm/dt/@baloise/web-app-validators-angular)
![GitHub](https://img.shields.io/github/license/baloise/web-app-utils)
![GitHub issues](https://img.shields.io/github/issues/baloise/web-app-utils)

## Installation

```bash
npm install @baloise/web-app-validators-angular
```

## Usage

The form elements support [Angular Reactive Forms](https://angular.io/guide/reactive-forms). Below is a basic example to use the reactive form together with the Design Stystem.

```html
<form [formGroup]="form" (ngSubmit)="onSubmit()" class="columns is-multiline mt-0">
  <bal-field class="column is-full py-0" expanded required [disabled]="form.get('email')?.disabled">
    <bal-field-label required>Email</bal-field-label>
    <bal-field-control>
      <bal-input name="email" placeholder="Enter your email" formControlName="email"></bal-input>
    </bal-field-control>
    <bal-field-message color="danger">
      <bal-ng-error controlName="email" error="isRequired">This field is required</bal-ng-error>
      <bal-ng-error controlName="email" error="isMinLength">Min length is 4</bal-ng-error>
      <bal-ng-error controlName="email" error="isEmail">Not a valid email</bal-ng-error>
    </bal-field-message>
  </bal-field>
  <bal-field class="column is-half py-0" expanded>...</bal-field>
</form>
```

In the component class wen can define the validators for the form control.

::: tip
Go to [Validators](/components/tooling/validators.html) page to see our collection of available validators.
:::

```typescript
import { Component } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'
import { BalValidators } from '@baloise/design-system-components-angular'

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
})
export class FormPageComponent {
  form = new FormGroup({
    email: new FormControl(null, [BalValidators.isRequired(), BalValidators.isMinLength(4), BalValidators.isEmail()]),
  })

  onSubmit() {
    alert('Form is submitted!')
  }
}
```
