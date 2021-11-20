/**
 * angular - pipes
 * --------------------------------------
 * This script reads the pipes.json and creates
 * out of this information the pipess.ts file, which
 * adds the pipes to the angular framework.
 */

const path = require('path')
const file = require('../../../.scripts/file')
const { title } = require('../../../.scripts/log')
const utilities = require('../../../.scripts/utilities')

const run = async () => {
  await title('angular : pipes')
  const files = await utilities.read({ fileName: 'pipes' })
  const pipes = files.map(f => f.functions[0])

  const functions = pipes.map(f => f.name)
  const utilPipes = pipes.map(f => `  ${f.name.charAt(0).toUpperCase() + f.name.slice(1)}Pipe`)
  const utilPipesClass = pipes.map(f =>
    [
      '@Pipe({',
      `  name: '${f.name}'`,
      '})',
      `export class ${f.name.charAt(0).toUpperCase() + f.name.slice(1)}Pipe implements PipeTransform {`,
      `  transform = ${f.name}`,
      '}',
      '',
    ].join('\n'),
  )

  const content = [
    '// generated file by .scripts/generator.script.js',
    '',
    `import { Pipe, PipeTransform } from '@angular/core';`,
    `import {`,
    `  ${functions.join(',\n  ')}`,
    `} from '@baloise/web-app-pipes'`,
    '',
    utilPipesClass.join('\n'),
    'export const PIPES = [',
    utilPipes.join(',\n'),
    ']',
  ].join('\n')

  await file.save(path.join(__dirname, '../src/pipes.ts'), content)
}

run()
