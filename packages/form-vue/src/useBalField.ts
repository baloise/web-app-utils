import { FieldContext, useField } from 'vee-validate'
import { computed, ComputedRef, ref, Ref, watch } from 'vue'
import { ValidationMessage } from './yup/types.yup'

export type MaybeRef<T> = Ref<T> | T

export interface BalFieldProps {
  value?: string
  label?: string
  disabled?: boolean
  message?: string
}

export interface BalFieldContext<TValue> extends FieldContext<TValue> {
  invalid: Ref<boolean>
  message: ComputedRef<ValidationMessage>
}

export interface BalFieldOptions {
  label?: MaybeRef<string>
  props?: Readonly<unknown>
  propKey?: string
}

export function useBalField<TValue>(name: MaybeRef<string>, options: BalFieldOptions = {}): BalFieldContext<TValue> {
  const field = useField<TValue>(name, undefined, { label: options.label })

  const invalid = computed(() => !!field.errorMessage.value)
  const validMessage = ref<string>('')

  if (options && options.props) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const p = options.props as any
    const k = options.propKey || 'value'
    validMessage.value = p['message']
    watch(
      () => p[k],
      () => field.setValue(p[k]),
    )
    watch(
      () => p['message'],
      () => (validMessage.value = p['message']),
    )
  }

  return {
    ...field,
    invalid,
    message: computed<ValidationMessage>(() =>
      invalid.value
        ? (field.errorMessage.value as any) || ''
        : validMessage.value
        ? { key: validMessage.value, values: {} }
        : undefined,
    ),
  }
}
