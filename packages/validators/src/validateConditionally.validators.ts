import { BalValidatorFn } from './validator.type'

/**
 * Returns `true` if the condition is true and the validations is true too.
 *
 * ```typescript
 * BalValidators.validateConditionally((value) => value > 2, () => true)(3) // true
 * BalValidators.validateConditionally((value) => value > 2, () => false)(3) // undefined
 * ```
 */
export function validateConditionally(validatorFn: BalValidatorFn, conditionFn: BalValidatorFn): BalValidatorFn {
  return function (value: any) {
    return !conditionFn(value) ? undefined : validatorFn(value)
  }
}
