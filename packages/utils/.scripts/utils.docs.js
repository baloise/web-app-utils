/**
 * docs-json
 * --------------------------------------
 * This script reads the defined functions and creates
 * a JSON file with all the meta information for documentation
 * and code generations.
 */

const utilities = require('../../../.scripts/utilities')

utilities.write({
  name: 'utils',
  files: 'src/utils/**/!(*.spec|index|model).ts',
  multiple: true,
})
