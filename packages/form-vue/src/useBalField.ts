import { useFieldError } from 'vee-validate'
import { computed, Ref } from 'vue'

export type MaybeRef<T> = Ref<T> | T

const isYupError = (a: any) => {
  if ((typeof a === 'object' || typeof a === 'function') && a !== null) {
    if ('key' in a) {
      return true
    }
  }
  return false
}

export function useBalField<TValues = unknown>(path: MaybeRef<string>, message?: MaybeRef<string>) {
  const error = useFieldError(path)

  const validationMessageKey = computed(() => (isYupError(error.value) ? (error as any).value.key : error.value || ''))

  const validationValues = computed<TValues>(() => (isYupError(error.value) ? (error as any).value.values : {}))

  const invalid = computed(() => !!error.value)

  return {
    invalid,
    message: computed<string>(() => (invalid.value ? validationMessageKey.value : message || '')),
    validationValues,
  }
}
