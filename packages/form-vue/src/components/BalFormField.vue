<script setup lang="ts">
import { computed, inject } from 'vue'
import { I18n } from 'vue-i18n'
import { ValidationMessage } from '../yup/types.yup';

export interface Props {
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
  <bal-field
    :invalid="props.invalid"
    :readonly="props.readonly"
    :disabled="props.disabled"
    :loading="props.loading"
    :required="props.required"
  >
    <bal-field-label v-if="props.label" :disabled="props.disabled">{{ props.label }}</bal-field-label>
    <bal-field-control>
      <slot></slot>
    </bal-field-control>
    <bal-field-message>
      {{ computedMessage }}
    </bal-field-message>
  </bal-field>
</template>
