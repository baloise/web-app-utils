import { balDateString } from './balDateString'

describe('balDataString', () => {
  it('should be able to handle null and undefined', () => {
    expect(balDateString(new Date(2022, 11, 31))).toBe('2022-12-31')
  })
})
