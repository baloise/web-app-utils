import { isAfter, isBefore, isDate, isMinDate } from './date.validators'

const aDate = new Date(2000, 0, 1)
const aDateString = '2000-01-01'
const oldDate = new Date(1999, 0, 1)
const oldDateString = '1999-01-01'

describe('date', () => {
  test('isDate', () => {
    const validator = isDate()
    expect(validator(aDate)).toBe(true)
    expect(validator(aDateString)).toBe(true)
    expect(validator('2000-0101')).toBe(false)
    expect(validator(undefined)).toBe(true)
    expect(validator(null)).toBe(true)
    expect(validator('')).toBe(true)
    expect(validator(1)).toBe(false)
  })
  test('isBefore', () => {
    expect(isBefore(aDate)(oldDate)).toBe(true)
    expect(isBefore(aDate)(oldDateString)).toBe(true)
    expect(isBefore(aDateString)(oldDate)).toBe(true)
    expect(isBefore(oldDate)(aDate)).toBe(false)
    expect(isBefore(oldDate)(aDateString)).toBe(false)
    expect(isBefore(oldDateString)(aDate)).toBe(false)
    expect(isBefore(aDate)(null)).toBe(true)
    expect(isBefore(aDate)('')).toBe(true)
  })
  test('isAfter', () => {
    expect(isAfter(aDate)(oldDate)).toBe(false)
    expect(isAfter(aDate)(oldDateString)).toBe(false)
    expect(isAfter(aDateString)(oldDate)).toBe(false)
    expect(isAfter(oldDate)(aDate)).toBe(true)
    expect(isAfter(oldDate)(aDateString)).toBe(true)
    expect(isAfter(oldDateString)(aDate)).toBe(true)
    expect(isAfter(aDate)(null)).toBe(true)
    expect(isAfter(aDate)('')).toBe(true)
  })
  test('isMinDate', () => {
    expect(isMinDate(aDate)(aDate)).toBe(true)
    expect(isMinDate(aDateString)(aDate)).toBe(true)
    expect(isMinDate(oldDate)(aDate)).toBe(true)
    expect(isMinDate(oldDate)(aDateString)).toBe(true)
    expect(isMinDate(aDate)(oldDate)).toBe(false)
    expect(isMinDate(aDate)(null)).toBe(true)
    expect(isMinDate(aDate)('')).toBe(true)
  })
})
