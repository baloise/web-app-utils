// generated file by .build/generator.script.js

import { AbstractControl, ValidatorFn } from '@angular/forms';
import { BalValidators, BalValidatorFn } from '@baloise/web-app-validators'

 function createError(key: string, control: AbstractControl) {
   return {
     [`${key}`]: { value: control.value },
   }
 }

 function validate(result: boolean, key: string, control: AbstractControl) {
   return result === true ? null : createError(key, control)
 }

 export function isCustom(validatorFn: BalValidatorFn, errorName = 'isCustom'): ValidatorFn {
   return (control: AbstractControl): { [key: string]: any } | null => {
     return validate(BalValidators.isCustom(validatorFn)(control.value), errorName, control)
   }
 }

 export function isBefore(date: any, errorName = 'isBefore'): ValidatorFn {
   return (control: AbstractControl): { [key: string]: any } | null => {
     return validate(BalValidators.isBefore(date)(control.value), errorName, control)
   }
 }

 export function isAfter(date: any, errorName = 'isAfter'): ValidatorFn {
   return (control: AbstractControl): { [key: string]: any } | null => {
     return validate(BalValidators.isAfter(date)(control.value), errorName, control)
   }
 }

 export function isDate(errorName = 'isDate'): ValidatorFn {
   return (control: AbstractControl): { [key: string]: any } | null => {
     return validate(BalValidators.isDate()(control.value), errorName, control)
   }
 }

 export function isMin(min: number, errorName = 'isMin'): ValidatorFn {
   return (control: AbstractControl): { [key: string]: any } | null => {
     return validate(BalValidators.isMin(min)(control.value), errorName, control)
   }
 }

 export function isMax(max: number, errorName = 'isMax'): ValidatorFn {
   return (control: AbstractControl): { [key: string]: any } | null => {
     return validate(BalValidators.isMax(max)(control.value), errorName, control)
   }
 }

 export function isNumber(errorName = 'isNumber'): ValidatorFn {
   return (control: AbstractControl): { [key: string]: any } | null => {
     return validate(BalValidators.isNumber()(control.value), errorName, control)
   }
 }

 export function isMonetaryNumber(errorName = 'isMonetaryNumber'): ValidatorFn {
   return (control: AbstractControl): { [key: string]: any } | null => {
     return validate(BalValidators.isMonetaryNumber()(control.value), errorName, control)
   }
 }

 export function matchesRegex(regex: RegExp, errorName = 'matchesRegex'): ValidatorFn {
   return (control: AbstractControl): { [key: string]: any } | null => {
     return validate(BalValidators.matchesRegex(regex)(control.value), errorName, control)
   }
 }

 export function isEmail(errorName = 'isEmail'): ValidatorFn {
   return (control: AbstractControl): { [key: string]: any } | null => {
     return validate(BalValidators.isEmail()(control.value), errorName, control)
   }
 }

 export function isPhone(errorName = 'isPhone'): ValidatorFn {
   return (control: AbstractControl): { [key: string]: any } | null => {
     return validate(BalValidators.isPhone()(control.value), errorName, control)
   }
 }

 export function isRequired(errorName = 'isRequired'): ValidatorFn {
   return (control: AbstractControl): { [key: string]: any } | null => {
     return validate(BalValidators.isRequired()(control.value), errorName, control)
   }
 }

 export function isRequiredTrue(errorName = 'isRequiredTrue'): ValidatorFn {
   return (control: AbstractControl): { [key: string]: any } | null => {
     return validate(BalValidators.isRequiredTrue()(control.value), errorName, control)
   }
 }

 export function isMinLength(minLength: number, errorName = 'isMinLength'): ValidatorFn {
   return (control: AbstractControl): { [key: string]: any } | null => {
     return validate(BalValidators.isMinLength(minLength)(control.value), errorName, control)
   }
 }

 export function isMaxLength(maxLength: number, errorName = 'isMaxLength'): ValidatorFn {
   return (control: AbstractControl): { [key: string]: any } | null => {
     return validate(BalValidators.isMaxLength(maxLength)(control.value), errorName, control)
   }
 }

 export function validateConditionally(validatorFn: BalValidatorFn, conditionFn: BalValidatorFn, errorName = 'validateConditionally'): ValidatorFn {
   return (control: AbstractControl): { [key: string]: any } | null => {     
     const result = BalValidators.validateConditionally(validatorFn, conditionFn)(control.value) 
     // undefined: condition is NOT fullfilled, true: condition is fulfilled & value is valid, false: condition is fulfilled & value is invalid
     return result === undefined || result === true ? null : createError(errorName, control)
   }
 }
