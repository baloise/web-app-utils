import { balDataString } from './balDataString'

describe('balDataString', () => {
  it('should be able to handle null and undefined', () => {
    expect(balDataString(new Date(2022, 11, 31))).toBe('2022-12-31')
  })
})
