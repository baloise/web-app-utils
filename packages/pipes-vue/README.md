# Vue Pipes

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
