declare module 'yup' {
  interface StringSchema {
    phone(message?: string): this
    monetaryNumber(message?: string): this
  }
}

import { addMethod, string, TestConfig } from 'yup'
import { BalValidators } from '@baloise/web-app-validators'
import { Maybe } from 'yup/lib/types'

addMethod(string, 'phone', function phone(message = 'Invalid phone number') {
  return this.test({
    message,
    name: 'string_phone',
    exclusive: true,
    skipAbsent: true,
    test: (value: Maybe<string>) => BalValidators.isPhone()(value),
  } as TestConfig)
})

addMethod(string, 'monetary', function monetary(message = 'Invalid monetary number') {
  return this.test({
    message,
    name: 'string_monetary',
    exclusive: true,
    skipAbsent: true,
    test: (value: Maybe<string>) => BalValidators.isMonetaryNumber()(value),
  } as TestConfig)
})
