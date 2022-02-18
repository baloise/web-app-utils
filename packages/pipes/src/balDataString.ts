import { isEmpty, formatDateString } from '@baloise/web-app-utils'

/**
 * Transforms the given string parameter to capitalize string.
 *
 * ```typescript
 * balDataString(new Date(2022, 11, 31)) // '2022-12-31'
 * ```
 */
export function balDataString(value: Date | undefined): string {
  if (isEmpty(value)) {
    return ''
  } else {
    return formatDateString(value)
  }
}
