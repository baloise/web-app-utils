const path = require('path')
const file = require('../../../.scripts/file')
const { title } = require('../../../.scripts/log')
const utilities = require('../../../.scripts/utilities')

const run = async () => {
  await title('angular : validators')
  const files = await utilities.read({ fileName: 'validators' })
  const validators = files
    .reduce((acc, f) => {
      return [...acc, ...f.functions]
    }, [])
    .map(v => {
      return `
 export function ${v.name}(${v.parameters.map(p => `${p.name}: ${p.type}`).join(', ')}): ValidatorFn {
   return (control: AbstractControl): { [key: string]: any } | null => {
     return validate(BalValidators.${v.name}(${v.parameters.map(p => p.name).join(', ')})(control.value), '${
        v.name
      }', control)
   }
 }`
    })

  const content = [
    '// generated file by .scripts/generator.script.js',
    '',
    `import { AbstractControl, ValidatorFn } from '@angular/forms';`,
    `import { BalValidators, BalValidatorFn } from '@baloise/web-app-validators'`,
    `
 function createError(key: string, control: AbstractControl) {
   return {
     [\`\${key}\`]: { value: control.value },
   }
 }

 function validate(result: boolean, key: string, control: AbstractControl) {
   return result === true ? null : createError(key, control)
 }`,
    validators.join('\n'),
    '',
  ].join('\n')

  await file.save(path.join(__dirname, '../src/validators.ts'), content)
}

run()
