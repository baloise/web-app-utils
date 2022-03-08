import { validateConditionally } from './validateConditionally.validators'

describe('custom', () => {
  test('validateConditionally when true', () => {
    const validator = validateConditionally(
      value => value > 2,
      () => true,
    )
    expect(validator(3)).toBe(true)
    expect(validator(2)).toBe(false)
  })
  test('validateConditionally when false', () => {
    const validator = validateConditionally(
      value => value > 2,
      () => false,
    )
    expect(validator(3)).toBe(undefined)
    expect(validator(2)).toBe(undefined)
  })
})
