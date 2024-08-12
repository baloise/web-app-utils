// generated file by .build/validators.index.js

export { BalValidatorFn } from './validator.type'

import { isCustom } from './custom.validators'
import { isBefore, isAfter, isDate, isMinDate } from './date.validators'
import { isMin, isMax, isNumber, isMonetaryNumber } from './number.validators'
import { matchesRegex, isEmail, isPhone } from './regex.validators'
import { isRequired, isRequiredTrue } from './required.validators'
import { isMinLength, isMaxLength } from './string.validators'
import { validateConditionally } from './validateConditionally.validators'

export const BalValidators = {
  isCustom,
  isBefore,
  isAfter,
  isDate,
  isMinDate,
  isMin,
  isMax,
  isNumber,
  isMonetaryNumber,
  matchesRegex,
  isEmail,
  isPhone,
  isRequired,
  isRequiredTrue,
  isMinLength,
  isMaxLength,
  validateConditionally,
}
