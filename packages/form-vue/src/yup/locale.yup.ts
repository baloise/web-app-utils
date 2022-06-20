import { setLocale } from 'yup'
import { LocaleObject } from 'yup/lib/locale'
import { ValidationMessage } from './types.yup'

const validationKey =
  <TValue = unknown, TArg = unknown>(key: string) =>
  (ctx: any): ValidationMessage<TValue, TArg> => {
    return {
      key: `${ctx.path}.validation.${key}`,
      values: {
        arg: ctx[key],
        value: ctx.value,
      },
    }
  }

export const initLocale = (custom: LocaleObject) => {
  setLocale({
    ...{
      mixed: {
        default: validationKey('default'),
        required: validationKey('required'),
        defined: validationKey('defined'),
        oneOf: validationKey('oneOf'),
        notOneOf: validationKey('notOneOf'),
        notType: validationKey('notType'),
      },
      string: {
        email: validationKey('email'),
        min: validationKey('min'),
        max: validationKey('max'),
        length: validationKey('length'),
        matches: validationKey('matches'),
        url: validationKey('url'),
        trim: validationKey('url'),
        lowercase: validationKey('lowercase'),
        uppercase: validationKey('uppercase'),
        phone: validationKey('phone'),
        monetary: validationKey('monetary'),
      } as any,
      number: {
        min: validationKey('min'),
        max: validationKey('max'),
        lessThan: validationKey('lessThan'),
        moreThan: validationKey('moreThan'),
        positive: validationKey('positive'),
        negative: validationKey('negative'),
        integer: validationKey('integer'),
      },
      date: {
        min: validationKey('min'),
        max: validationKey('max'),
      },
      object: {
        noUnknown: validationKey('noUnknown'),
      },
      array: {
        min: validationKey('min'),
        max: validationKey('max'),
        length: validationKey('length'),
      },
      boolean: {
        isValue: validationKey('isValue'),
      },
    },
    ...custom,
  })
}
