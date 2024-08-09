import * as BalUtils from '@baloise/web-app-utils'
import * as DateFns from 'date-fns'
import isString from 'lodash.isstring'
import { BalValidatorFn } from './validator.type'

/**
 * Returns `true` if the value date is before the given date
 *
 * ```typescript
 * BalValidators.isBefore('2000-01-02')('2000-01-01') // true
 * BalValidators.isBefore(new Date(2020, 0, 2))(new Date(2020, 0, 1)) // true
 * ```
 */
export function isBefore(date: Date | string | number): BalValidatorFn {
  return function (value: any) {
    if (BalUtils.isEmpty(value)) {
      return true
    }
    if (isString(value)) {
      value = BalUtils.parse(value)
    }
    if (isString(date)) {
      date = BalUtils.parse(date)
    }
    return DateFns.isBefore(value, date)
  }
}

/**
 * Returns `true` if the value date is before the given date
 *
 * ```typescript
 * BalValidators.isAfter('2000-01-01')('2000-01-02') // true
 * BalValidators.isAfter(new Date(2020, 0, 1))(new Date(2020, 0, 2)) // true
 * ```
 */
export function isAfter(date: Date | string): BalValidatorFn {
  return function (value: any) {
    if (BalUtils.isEmpty(value)) {
      return true
    }
    if (isString(value)) {
      value = BalUtils.parse(value)
    }
    if (isString(date)) {
      date = BalUtils.parse(date)
    }
    return DateFns.isAfter(value, date)
  }
}

/**
 * Returns `true` if the value is valid date
 *
 * ```typescript
 * BalValidators.isDate()('2000-01-02') // true
 * BalValidators.isDate()(new Date(2000, 0, 1)) // true
 * ```
 */
export function isDate(): BalValidatorFn {
  return function (value: any) {
    if (BalUtils.isEmpty(value)) {
      return true
    }
    if (isString(value) && BalUtils.isValidIsoString(value)) {
      return true
    }

    return DateFns.isDate(value)
  }
}

/**
 * Returns `true` if the given data is at the same or after the value date
 *
 * ```typescript
 * BalValidators.isMinDate('2000-01-01')('2000-01-01') // true
 * BalValidators.isMinDate('2000-01-02')('2000-01-01') // true
 * BalValidators.isMinDate(new Date(2020, 0, 1))(new Date(2020, 0, 1)) // true
 * ```
 */
export function isMinDate(date: Date | string): BalValidatorFn {
  return function (value: any) {
    if (BalUtils.isEmpty(value)) {
      return true
    }
    if (isString(value)) {
      value = BalUtils.parse(value)
    }
    if (isString(date)) {
      date = BalUtils.parse(date)
    }
    return DateFns.isSameDay(value, date) || DateFns.isAfter(value, date)
  }
}
