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
npm install @baloise/web-app-form-vue vee-validate@next yup vue-i18n
```

```typescript
import { baloiseForm } from '@baloise/web-app-form-vue'
import App from './App.vue'

createApp(App).use(baloiseForm).mount('#app')
```

## Define Form Grid

```vue
<script setup lang="ts">
import { BalFormGrid, BalFormCol } from '@baloise/web-app-form-vue'
</script>
<template>
  <BalFormGrid>
    <BalFormCol size="two-thirds">...</BalFormCol>
    <BalFormCol size="one-third">...</BalFormCol>
    <BalFormCol size="one-third">...</BalFormCol>
    <BalFormCol size="two-thirds">...</BalFormCol>
  </BalFormGrid>
</template>
```

## Define Form Field

```vue
<script setup lang="ts">
import { BalInput } from '@baloise/design-system-components-vue'
import { useBalField, BalFormField } from '@baloise/web-app-form-vue'

const { value, message, invalid } = useBalField<string>('firstname', { props })
</script>

<template>
  <BalFormField label="My Label" :message="message" :invalid="invalid" required :disabled="false">
    <BalInput v-model="value" />
  </BalFormField>
</template>
```
