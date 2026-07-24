import isNil from 'lodash.isnil'
import isString from 'lodash.isstring'
import isBoolean from 'lodash.isboolean'
import isObject from 'lodash.isobject'
import isDate from 'lodash.isdate'

/**
 * Returns `true` if the value is empty
 */
export function isEmpty(value: any): boolean {
  if (isNil(value)) {
    return true
  }

  if (isString(value) && value === '') {
    return true
  }

  if (isBoolean(value)) {
    return false
  }

  if (isDate(value)) {
    return false
  }

  if (Array.isArray(value) && value.length === 0) {
    return true
  }

  if (isObject(value) && Object.keys(value).length === 0) {
    return true
  }

  return false
}
