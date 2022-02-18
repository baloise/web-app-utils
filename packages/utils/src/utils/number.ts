import isNil from 'lodash.isnil'
import isNaN from 'lodash.isnan'
import isString from 'lodash.isstring'

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
export const getDecimalSeparator = (locale = 'de-CH'): string => {
  return Intl.NumberFormat(locale)
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
export const getThousandSeparator = (locale = 'de-CH'): string => {
  return Intl.NumberFormat(locale)
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
export const formatLocaleNumber = (locale = 'de-CH', number: number, minimumFractionDigits?: number): string => {
  const options = minimumFractionDigits !== undefined ? { minimumFractionDigits } : {}
  const formattedNumber = Intl.NumberFormat(locale, {
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
export const parseLocaleNumber = (locale = 'de-CH', stringNumber: string): number => {
  const thousandSeparator = getThousandSeparator(locale)
  const decimalSeparator = getDecimalSeparator(locale)

  return parseFloat(
    stringNumber
      .replace(new RegExp('\\' + thousandSeparator, 'g'), '')
      .replace(new RegExp('\\' + decimalSeparator), '.'),
  )
}
