/**
 * vue - pipes
 * --------------------------------------
 * This script reads the filter.json and creates
 * out of this information the pipes.ts file, which
 * adds the pipes to the vue framework.
 */

const path = require('path')
const file = require('../../../.build/file')
const { title } = require('../../../.build/log')
const utilities = require('../../../.build/utilities')

const run = async () => {
  await title('vue : pipes')
  const files = await utilities.read({ fileName: 'pipes' })
  const pipes = files.map(f => f.functions[0])
  const functions = pipes.map(f => `  ${f.name}`)
  const functionsGlobal = pipes.map(f => `  app.config.globalProperties.$${f.name} = ${f.name}`)
  const content = [
    '// generated file by .build/generator.script.js',
    '',
    `import { App } from 'vue'`,
    `import {`,
    functions.join(',\n'),
    `} from '@baloise/web-app-pipes'`,
    '',
    'export const applyPipes = (app: App) => {',
    functionsGlobal.join('\n'),
    '',
    '}',
    '',
  ].join('\n')

  await file.save(path.join(__dirname, '../src/generated/pipes.ts'), content)
}

run()
