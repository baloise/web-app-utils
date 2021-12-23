/**
 * pipes - docs-json
 * --------------------------------------
 * This script reads the defined filter functions and creates
 * a JSON file with all the meta information for documentation
 * and code generations.
 */

const utilities = require('../../../.build/utilities')

utilities.write({
  name: 'pipes',
  files: 'src/**/!(*.spec|index).ts',
  multiple: false,
  assertedReturnType: 'string',
})
