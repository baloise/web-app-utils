import {
  isValidMonetaryNumber,
  getDecimalSeparator,
  getThousandSeparator,
  formatLocaleNumber,
  parseLocaleNumber,
} from './number'

describe('number', () => {
  describe('isValidMonetaryNumber', () => {
    test('should return true if it is a valid monetary number', () => {
      expect(isValidMonetaryNumber('')).toBe(false)
      expect(isValidMonetaryNumber('a')).toBe(false)
      expect(isValidMonetaryNumber('-85')).toBe(true)
      expect(isValidMonetaryNumber("1'000.98")).toBe(true)
    })
  })

  describe('getDecimalSeparator', () => {
    test('should return the correct decimal separator in the given locale', () => {
      expect(getDecimalSeparator('de-CH')).toBe('.')
      expect(getDecimalSeparator('de-DE')).toBe(',')
    })
  })

  describe('getThousandSeparator', () => {
    test('should return the correct thousand separator in the given locale', () => {
      expect(getThousandSeparator('de-CH')).toBe('’')
      expect(getThousandSeparator('de-DE')).toBe('.')
    })
  })

  describe('formatLocaleNumber', () => {
    test('should format the number into the given locale', () => {
      expect(formatLocaleNumber('de-CH', 1000.4231, 2)).toBe('1’000.42')
      expect(formatLocaleNumber('de-CH', 1000.42)).toBe('1’000.42')
      expect(formatLocaleNumber('de-DE', 1000.42)).toBe('1.000,42')
      expect(formatLocaleNumber('de-DE', 0)).toBe('0')
      expect(formatLocaleNumber('de-DE', -1)).toBe('-1')
      expect(formatLocaleNumber('de-DE', NaN)).toBe('')
      expect(formatLocaleNumber('de-DE', undefined)).toBe('')
    })
  })

  describe('parseLocaleNumber', () => {
    test('should parse the locale number into the native number', () => {
      expect(parseLocaleNumber('de-CH', '1’000.42')).toBe(1000.42)
      expect(parseLocaleNumber('de-DE', '1.000,42')).toBe(1000.42)
      expect(parseLocaleNumber('de-CH', '')).toBe(NaN)
      expect(parseLocaleNumber('de-CH', '-1')).toBe(-1)
    })
  })
})
