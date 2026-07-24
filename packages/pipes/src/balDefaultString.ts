import { isEmpty } from '@baloise/web-app-utils'

/**
 * If the value is empty it shows a dash ('-').
 *
 * ```typescript
 * balDefaultString('') // -\n
 * balDefaultString('text') // text
 * ```
 */
export function balDefaultString(value: string | undefined | null, defaultString = '-'): string {
  return isEmpty(value) ? defaultString : (value as string)
}
