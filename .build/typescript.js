/**
 * To understand the typescript ast use this tool
 * https://ts-ast-viewer.com/
 */

const { SyntaxKind } = require('typescript')
const ts = require('typescript')

const createSourceFile = fileContent => ts.createSourceFile('x.ts', fileContent, ts.ScriptTarget.Latest)

const filterDeclarationsAndStatements = (list, kind) => {
  const nodes = []
  list.forEach(statement => {
    if (statement.kind === kind) {
      nodes.push(statement)
    }
  })
  return nodes
}

const filterFunctionDeclaration = nodes => {
  return filterDeclarationsAndStatements(nodes, SyntaxKind.FunctionDeclaration)
}

const filterVariableStatements = nodes => {
  return filterDeclarationsAndStatements(nodes, SyntaxKind.VariableStatement)
}

const filterVariableDeclaration = nodes => {
  return filterDeclarationsAndStatements(nodes, SyntaxKind.VariableDeclaration)
}

const filterInterfaceDeclaration = nodes => {
  return filterInterfaceDeclarations(nodes)[0]
}

const filterModuleDeclaration = nodes => {
  return filterDeclarationsAndStatements(nodes, SyntaxKind.ModuleDeclaration)[0]
}

const filterInterfaceDeclarations = nodes => {
  return filterDeclarationsAndStatements(nodes, SyntaxKind.InterfaceDeclaration)
}

const filterExportedStatements = nodes => {
  return nodes.filter(statement => {
    if (statement.modifiers && statement.modifiers.length > 0) {
      return statement.modifiers.filter(m => m.kind === SyntaxKind.ExportKeyword).length === 1
    }
    return false
  })
}

const parseParameters = parameter => {
  return {
    name: parameter.name.escapedText,
    type: parseType(parameter.type),
  }
}

const parseFunctionComment = (node, sourceFile) =>
  node
    .getFullText(sourceFile)
    .replace(node.getText(sourceFile), '')
    .split('\n')
    .map(l => l.trim())
    .filter(l => l)
    .filter(l => l !== '/**' && l !== '*/')
    .map(l => (l.startsWith('*') ? l.substring(2) : l))

const parseType = type => {
  if (type === undefined) {
    return 'any'
  }
  if (type.typeName) {
    return type.typeName.escapedText
  }

  switch (type.kind) {
    case SyntaxKind.UndefinedKeyword:
      return 'undefined'
    case SyntaxKind.NullKeyword:
      return 'null'
    case SyntaxKind.BooleanKeyword:
      return 'boolean'
    case SyntaxKind.NumberKeyword:
      return 'number'
    case SyntaxKind.StringKeyword:
      return 'string'
    case 173:
      return 'Blob'
    case 160:
      return 'RegExp'
    case 178:
      return `${parseType(type.elementType)}[]`
    case 183: // UnionType like string | number
      return type.types.map(parseType).join(' | ')
    default:
      return 'any'
  }
}

module.exports = {
  createSourceFile,
  filterDeclarationsAndStatements,
  filterVariableStatements,
  filterVariableDeclaration,
  filterFunctionDeclaration,
  filterExportedStatements,
  filterInterfaceDeclaration,
  filterInterfaceDeclarations,
  parseFunctionComment,
  filterModuleDeclaration,
  parseType,
  parseParameters,
}
