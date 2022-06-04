<script setup lang="ts">
import { BalField, BalFieldLabel, BalFieldControl, BalFieldMessage } from '@baloise/design-system-components-vue'
import { computed, inject } from 'vue'
import { I18n } from 'vue-i18n'
import { ValidationMessage } from '../yup/types.yup';

interface Props {
  label?: string
  message?: ValidationMessage | string
  invalid?: boolean
  required?: boolean
  disabled?: boolean
  readonly?: boolean
  loading?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  label: undefined,
  message: undefined,
  invalid: false,
  required: true,
  disabled: false,
  readonly: false,
  loading: false,
})

const computedMessage = computed(() => {
  const i18n = inject<I18n>('i18n')
  if (i18n) {
    if (typeof props.message === 'object' && props.message !== null) {
      return i18n.global.t(props.message.key, props.message.values)
    }
    if (props.message === '' || props.message === undefined) {
      return ''
    }
    return i18n.global.t((props.message as string | undefined) || '')
  }
  return ''
})
</script>

<template>
  <BalField
    :invalid="props.invalid"
    :readonly="props.readonly"
    :disabled="props.disabled"
    :loading="props.loading"
  >
    <BalFieldLabel v-if="props.label">{{ props.label }}</BalFieldLabel>
    <BalFieldControl>
      <slot></slot>
    </BalFieldControl>
    <BalFieldMessage>
      {{ computedMessage }}
    </BalFieldMessage>
  </BalField>
</template>
