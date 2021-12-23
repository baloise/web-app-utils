/**
 * Formats the number into a human readable currency string.
 *
 * ```typescript
 * balCurrency(1234567.89) // 1'234'567.89
 * ```
 */
export function balCurrency(value: number | null, currencySign = 'CHF', showZero = false, decimalLength = 2): string {
  if (!value && !(showZero && value === 0)) {
    return ''
  }
  const chunkDelimiter = "'"
  const decimalDelimiter = '.'
  const chunkLength = 3

  const result = '\\d(?=(\\d{' + chunkLength + '})+' + (decimalLength > 0 ? '\\D' : '$') + ')'
  const num = value.toFixed(Math.max(0, ~~decimalLength))

  // CharCode 160 is a non-breaking space (&nbsp;) (https://www.w3schools.com/charsets/ref_utf_latin1_supplement.asp)
  return (
    currencySign +
    String.fromCharCode(160) +
    (decimalDelimiter ? num.replace('.', decimalDelimiter) : num).replace(
      new RegExp(result, 'g'),
      '$&' + chunkDelimiter,
    )
  )
}
