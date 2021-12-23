/**
 * pipes - index
 * --------------------------------------
 * This script reads the pipes.json and creates
 * out of this information the index.ts file with
 * all the types and exports.
 */

const path = require('path')
const utilities = require('../../../.build/utilities')
const file = require('../../../.build/file')
const log = require('../../../.build/log')

const run = async () => {
  await log.title('utils : index')
  const files = await utilities.read({ fileName: 'utils' })
  const utilExports = files.map(pipe => {
    return `export * from './${pipe.fileName}'`
  })
  const content = ['// generated file by .build/utils.index.js', '', utilExports.join('\n'), ''].join('\n')
  await file.save(path.join(__dirname, '../src/utils/index.ts'), content)
}

run()
