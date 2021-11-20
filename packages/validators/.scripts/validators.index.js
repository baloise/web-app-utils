/**
 * validators - index
 * --------------------------------------
 * This script reads the validators.json and creates
 * out of this information the index.ts file with
 * all the types and exports.
 */

const path = require('path')
const _ = require('lodash')
const utilities = require('../../../.scripts/utilities')
const file = require('../../../.scripts/file')
const log = require('../../../.scripts/log')

const run = async () => {
  await log.title('validators : index')
  const files = await utilities.read({ fileName: 'validators' })
  const fileImports = files.map(f => {
    const imp = _.uniq([...f.interfaces, ...f.functions.map(fn => fn.name)])
    return `import { ${imp.join(', ')} } from './${f.fileName}'`
  })

  const validators = files.reduce((acc, f) => {
    return [...acc, ...f.functions.map(fn => `  ${fn.name},`)]
  }, [])

  const content = [
    '// generated file by .scripts/validators.index.js',
    '',
    `export { BalValidatorFn } from './validator.type'`,
    '',
    fileImports.join('\n'),
    '',
    'export const BalValidators = {',
    validators.join('\n'),
    '}',
    '',
  ].join('\n')
  await file.save(path.join(__dirname, '../src/index.ts'), content)
}

run()
