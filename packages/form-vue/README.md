# @baloise/web-form-vue

[![Continuous](https://github.com/baloise/web-app-utils/actions/workflows/continuous.yml/badge.svg?branch=master)](https://github.com/baloise/web-app-utils/actions/workflows/continuous.yml)
[![Release](https://github.com/baloise/web-app-utils/actions/workflows/release.yml/badge.svg?branch=master)](https://github.com/baloise/web-app-utils/actions/workflows/release.yml)
![npm](https://img.shields.io/npm/v/@baloise/web-app-form-vue)
![npm bundle size](https://img.shields.io/bundlephobia/min/@baloise/web-app-form-vue)
![npm](https://img.shields.io/npm/dt/@baloise/web-app-form-vue)
![GitHub](https://img.shields.io/github/license/baloise/web-app-utils)
![GitHub issues](https://img.shields.io/github/issues/baloise/web-app-utils)

Delivers utility components to create forms that follow the guides of the
Baloise Design System. Moreover it extends the useField function to work as
smooth as possible with the Baloise Design System and defines Baloise specific
yup schema validations.

## Installation

For Vue we use the library [VeeValidate](https://vee-validate.logaretm.com/v4/) together with the [Yup Schema Validation](https://github.com/jquense/yup).

```bash
npm install @baloise/web-app-form-vue vee-validate@next yup
```

```typescript
import { baloiseForm } from '@baloise/web-app-form-vue'
import App from './App.vue'

createApp(App).use(baloiseForm).mount('#app')
```

## Define Form Field

Instead of using the `useField` from **Vee-Validate** use the wrapper `useBalField`.
This extends the **Vee-Validate** implementation with the property invalid and
message from the yup schema validations.

- [Vee-Validate useField API](https://vee-validate.logaretm.com/v4/api/use-field)

```vue
<script setup lang="ts">
import { BalInput, BalField, BalFieldLabel, BalFieldControl, BalFieldMessage } from '@baloise/design-system-components-vue'
import { useBalField } from '@baloise/web-app-form-vue'

const { value, message, invalid } = useBalField<string>('firstname')
</script>

<template>
  <BalField :invalid="invalid">
    <BalFieldLabel>My Label</BalFieldLabel>
    <BalFieldControl>
      <BalInput v-model="value" />
    </BalFieldControl>
    <BalFieldMessage>{{ message }}</BalFieldMessage>
  </BalFie>
</template>
```
