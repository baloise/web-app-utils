import isNil from 'lodash.isnil'
import isNaN from 'lodash.isnan'
import isString from 'lodash.isstring'
import { numberLocale } from './locale'

const SWISS_APOSTROPHES = /[‘’]/g

function normalizeSwissSeparator(locale: string, value: string): string {
  return numberLocale(locale) === 'de-CH' ? value.replace(SWISS_APOSTROPHES, "'") : value
}

/**
 * Returns `true` if the arrays are equal
 *
 * ```typescript
 * isValidMonetaryNumber(`1'000.99`) // true
 * ```
 */
export function isValidMonetaryNumber(stringValue: string): boolean {
  if (isNil(stringValue) && !isString(stringValue)) {
    return false
  }

  stringValue = stringValue.replace(/'/g, '')
  stringValue = stringValue.replace(/‘/g, '')
  stringValue = stringValue.replace(/’/g, '')
  stringValue = stringValue.replace(/,/g, '.')

  return !isNaN(parseFloat(stringValue))
}

/**
 * Returns the decimal separator of the given locale
 *
 * ```typescript
 * getDecimalSeparator('de-ch') // .
 * ```
 */
export function getDecimalSeparator(locale = 'de-CH'): string {
  return Intl.NumberFormat(numberLocale(locale))
    .format(1.1)
    .replace(/\p{Number}/gu, '')
}

/**
 * Returns the thousand separator of the given locale
 *
 * ```typescript
 * getThousandSeparator('de-ch') // '
 * ```
 */
export function getThousandSeparator(locale = 'de-CH'): string {
  return normalizeSwissSeparator(
    locale,
    Intl.NumberFormat(numberLocale(locale))
      .format(11111)
      .replace(/\p{Number}/gu, ''),
  )
}
