const path = require('path')
const log = require('./log')
const file = require('./file')
const utilities = require('./utilities')

const NEWLINE = '\n'
const GENERATE_TAG = '<!-- generated content -->'

async function main() {
  await log.title('pipes : docs')
  await updateApiOfDoc('utils', '## API', 'packages/utils/README.md', printFunction)
  await updateApiOfDoc('pipes', '## API', 'packages/pipes/README.md', printFunction)
  await updateApiOfDoc('validators', '## API', 'packages/validators/README.md', printFunction)
}

function printFunction(fn) {
  return [`### ${fn.name}`, ``, `\`${fn.name}${fn.signature}\``, ``, fn.documentation, ``].join(NEWLINE)
}

async function updateApiOfDoc(docName, title, targetPath, mapFn, returnFiles = false) {
  const content = await readFunctions(docName, mapFn, returnFiles)
  const fileContent = await readFile(targetPath)
  const fileLines = fileContent.split(NEWLINE)
  const lines = []
  let reachedGeneratedTag = false
  let index = 0
  while (reachedGeneratedTag === false) {
    const line = fileLines[index]
    lines.push(line)
    if (line.trim() === GENERATE_TAG) {
      reachedGeneratedTag = true
    }
    index = index + 1
  }

  await saveFile(targetPath, [...lines, '', title, '', ...content].join(NEWLINE))
}

async function readFunctions(fileName, mapFn, returnFiles = false) {
  const files = await utilities.read({ fileName })
  if (returnFiles) {
    return files.map(mapFn)
  }
  const functions = files.reduce((acc, f) => [...acc, ...f.functions], [])
  return functions.map(mapFn)
}

async function readFile(fileName) {
  return file.read(path.join(__dirname, `../${fileName}`))
}

async function saveFile(fileName, content) {
  await file.save(path.join(__dirname, `../${fileName}`), content)
}

main()
