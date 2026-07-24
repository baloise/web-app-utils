/**
 * validators - docs-json
 * --------------------------------------
 * This script reads the defined validators functions and creates
 * a JSON file with all the meta information for documentation
 * and code generations.
 */

const utilities = require('../../../.build/utilities')

utilities.write({
  name: 'validators',
  files: 'src/**/!(*.spec|index|*.type).ts',
  multiple: true,
  assertedReturnType: 'BalValidatorFn',
})
