# @baloise/web-form-vue

[![Continuous](https://github.com/baloise/web-app-utils/actions/workflows/continuous.yml/badge.svg?branch=master)](https://github.com/baloise/web-app-utils/actions/workflows/continuous.yml)
[![Release](https://github.com/baloise/web-app-utils/actions/workflows/release.yml/badge.svg?branch=master)](https://github.com/baloise/web-app-utils/actions/workflows/release.yml)
![npm](https://img.shields.io/npm/v/@baloise/web-app-validators-vue)
![npm bundle size](https://img.shields.io/bundlephobia/min/@baloise/web-app-validators-vue)
![npm](https://img.shields.io/npm/dt/@baloise/web-app-validators-vue)
![GitHub](https://img.shields.io/github/license/baloise/web-app-utils)
![GitHub issues](https://img.shields.io/github/issues/baloise/web-app-utils)

## Installation

For Vue we use the libary [VeeValidate](https://vee-validate.logaretm.com/v4/) togehter with the [Composition API](https://v3.vuejs.org/guide/composition-api-introduction.html).

First install VeeValidate (Version >= 4.x.x).

```bash
npm install @baloise/web-app-validators-vue vee-validate@next
```

## Define i18n validators

In this section we change the return type of our `BalValidators` into the the translated texts.
Pass your i18n translation function to the `useValidator` helper and then use the returned helper function `createValidator` to map the `BalValidators` with your translations.

```typescript
import { BalValidators } from '@baloise/design-system-components'
import { useValidator, ValidatorFn } from '@baloise/design-system-components-vue'
import { i18n } from '../../plugins/i18n.plugin'

export { rules } from '@baloise/design-system-components-vue'

const { createValidator } = useValidator(i18n.global.t)

export const isRequired = (): ValidatorFn => createValidator(BalValidators.isRequired(), 'validator.required')
```

## Create form

First we define our template like this.

```html
<form @submit.prevent="submit">
  <BalField expanded :disabled="isFirstNameDisabled">
    <BalFieldLabel required> {{ $t('form.firstName.label') }} </BalFieldLabel>
    <BalFieldControl>
      <BalInput
        v-model="firstName"
        :name="firstNameName"
        :placeholder="$t('form.firstName.placeholder')"
        :disabled="isFirstNameDisabled"
      ></BalInput>
    </BalFieldControl>
    <BalFieldMessage color="danger" v-if="!isFirstNameDisabled"> {{ firstNameErrorMessage }} </BalFieldMessage>
  </BalField>
</form>
```

Now we have to define the logic of our form with the help of VeeValidate.

The helper function `validators` helps us to combine validators and to use the possibility to dynamically disable fields and their validation rules.

```typescript
import { defineComponent, ref } from 'vue'
import { rules } from '@baloise/design-system-components-vue'
import { useField, useForm, useIsFormValid } from 'vee-validate'
import { isRequired } from '../helpers/validators'

export default defineComponent({
  setup() {
    const { validate } = useForm()
    const isFormValid = useIsFormValid()

    const isFirstNameDisabled = ref(false)
    const firstnameField = useField('firstname', rules(isFirstNameDisabled, [
      isRequired(),
    ]))

    async function submit() {
      const { valid, errors } = await validate()
      ...
    }

    function disable() {
      isFirstNameDisabled.value = !isFirstNameDisabled.value
    }

    return {
      firstname: firstnameField.value,
      firstNameName: firstnameField.name,
      firstnameErrorMessage: firstnameField.errorMessage,
      isFirstNameDisabled,
      isFormValid, disable, submit,
    }
  },
})
```

{
"extends": "../../tsconfig.base.json",
"compilerOptions": {
"outDir": "dist-transpiled",
"declaration": true,
"declarationDir": "dist/types",
"skipLibCheck": true,
"strictFunctionTypes": false,
"strictNullChecks": true
},
"include": ["src/**/*.ts", "src/**/*.tsx", "src/**/*.vue"],
"exclude": ["./__tests__/**", "node_modules"]
}
