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
  await log.title('pipes : index')
  const files = await utilities.read({ fileName: 'pipes' })
  const utilExports = files.map(pipe => {
    const names = pipe.functions.map(f => f.name)
    ex = [...names, ...pipe.interfaces]
    return `export { ${ex.join(', ')} } from './${pipe.functions[0].name}'`
  })
  // const utilImports = files
  //   .map(pipe => {
  //     if (pipe.interfaces.length === 0) {
  //       return undefined
  //     }
  //     return `import { ${pipe.interfaces.join(', ')} } from './${pipe.functions[0].name}'`
  //   })
  //   .filter(f => !!f)
  const firstFunctions = files.map(f => f.functions[0])
  const utilStaticTypes = firstFunctions.map(f => `  ${f.name}: ${f.signature}`)

  const content = [
    '// generated file by .build/pipes.index.js',
    // '',
    // utilImports.join('\n'),
    '',
    utilExports.join('\n'),
    '',
    'export interface BalPipesStatic {',
    utilStaticTypes.join('\n'),
    '}',
    '',
  ].join('\n')
  await file.save(path.join(__dirname, '../src/index.ts'), content)
}

run()
