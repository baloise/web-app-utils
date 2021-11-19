import isNil from "lodash.isnil";
import isNaN from "lodash.isnan";
import isString from "lodash.isstring";

/**
 * Returns `true` if the arrays are equal
 *
 * ```typescript
 * isValidMonetaryNumber(`1'000.99`) // true
 * ```
 */
export function isValidMonetaryNumber(stringValue: string): boolean {
  if (isNil(stringValue) && !isString(stringValue)) {
    return false;
  }

  stringValue = stringValue.replace(/'/g, "");
  stringValue = stringValue.replace(/‘/g, "");
  stringValue = stringValue.replace(/’/g, "");
  stringValue = stringValue.replace(/,/g, ".");

  return !isNaN(parseFloat(stringValue));
}
