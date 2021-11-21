# @baloise/web-app-pipes-vue

[![Continous](https://github.com/baloise/web-app-utils/actions/workflows/continous.yml/badge.svg?branch=master)](https://github.com/baloise/web-app-utils/actions/workflows/continous.yml)
[![Release](https://github.com/baloise/web-app-utils/actions/workflows/release.yml/badge.svg?branch=master)](https://github.com/baloise/web-app-utils/actions/workflows/release.yml)
![npm](https://img.shields.io/npm/v/@baloise/web-app-pipes-vue)
![npm bundle size](https://img.shields.io/bundlephobia/min/@baloise/web-app-pipes-vue)
![npm](https://img.shields.io/npm/dt/@baloise/web-app-pipes-vue)
![GitHub](https://img.shields.io/github/license/baloise/web-app-utils)
![GitHub issues](https://img.shields.io/github/issues/baloise/web-app-utils)

## Installation

```bash
npm install @baloise/web-app-pipes-vue
```

## Usage

In Vue 3 just import the pipe function and use it in computed functions or return it to the template.
Vue 3 has removed pipes/filters [Link](https://v3.vuejs.org/guide/migration/filters.html).

```vue
<template>
  <p>{{ formatedClaimNumber }}</p>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { balClaimNumber } from '@baloise/web-app-pipes-vue'

export default defineComponent({
  setup() {
    const claimNumber = ref('73001217169')

    const formatedClaimNumber = computed(() => balClaimNumber(claimNumber.value))

    return {
      formatedClaimNumber,
    }
  },
})
</script>
```
