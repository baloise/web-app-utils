/**
 * Parses the locale to the correct display locale
 *
 * ```typescript
 * numberLocale('de-CH')
 * // 'de-CH'
 * ```
 */
export function numberLocale(locale = 'de-CH'): string {
  const [, region] = locale.split('-')
  if (region === 'CH') {
    return 'de-CH'
  }
  if (region === 'BE') {
    return 'fr-BE'
  }
  if (region === 'LU') {
    return 'fr-LU'
  }
  return locale
}

/**
 * Parses the locale to the correct display locale
 *
 * ```typescript
 * numberLocale('de-CH')
 * // 'fr-CH'
 * ```
 */
export function dateLocale(locale = 'de-CH'): string {
  const [, region] = locale.split('-')
  if (region === 'CH') {
    return 'fr-CH'
  }
  if (region === 'BE') {
    return 'fr-BE'
  }
  if (region === 'LU') {
    return 'fr-LU'
  }
  return locale
}
