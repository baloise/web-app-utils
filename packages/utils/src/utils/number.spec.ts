import { isValidMonetaryNumber, getDecimalSeparator, getThousandSeparator } from './number'

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
      expect(getThousandSeparator('de-CH')).toBe("'")
      expect(getThousandSeparator('de-DE')).toBe('.')
    })
  })
})
