import isNil from "lodash.isnil";
import isString from "lodash.isstring";
import isArray from "lodash.isarray";
import isBoolean from "lodash.isboolean";
import isObject from "lodash.isobject";

/**
 * Returns `true` if the value is empty
 */
export function isEmpty(value: any): boolean {
  if (isNil(value)) {
    return true;
  }

  if (isString(value) && value === "") {
    return true;
  }

  if (isBoolean(value)) {
    return false;
  }

  if (isArray(value) && value.length === 0) {
    return true;
  }

  if (isObject(value) && Object.keys(value).length === 0) {
    return true;
  }

  return false;
}
