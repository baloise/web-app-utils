import isNil from 'lodash.isnil'
import isNaN from 'lodash.isnan'
import isString from 'lodash.isstring'
import { numberLocale } from './locale'

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
  return Intl.NumberFormat(numberLocale(locale))
    .format(11111)
    .replace(/\p{Number}/gu, '')
}

/**
 * Formats the number into the given locale
 *
 * ```typescript
 * formatLocaleNumber('de-ch', 1000.42) // 1'000.42
 * ```
 */
export function formatLocaleNumber(locale = 'de-CH', number: number, minimumFractionDigits?: number): string {
  const options =
    minimumFractionDigits !== undefined ? { minimumFractionDigits, maximumFractionDigits: minimumFractionDigits } : {}
  const formattedNumber = Intl.NumberFormat(numberLocale(locale), {
    ...options,
  }).format(number)

  if (formattedNumber === 'NaN') {
    return ''
  }

  return formattedNumber
}

/**
 * Parses the locale formatted number into a native number
 *
 * ```typescript
 * parseLocaleNumber('de-ch', '1'000.42') // 1000.42
 * ```
 */
export function parseLocaleNumber(locale = 'de-CH', stringNumber: string): number {
  const thousandSeparator = getThousandSeparator(numberLocale(locale))
  const decimalSeparator = getDecimalSeparator(numberLocale(locale))

  return parseFloat(
    stringNumber
      .replace(new RegExp('\\' + thousandSeparator, 'g'), '')
      .replace(new RegExp('\\' + decimalSeparator), '.'),
  )
}
