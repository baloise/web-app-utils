import baseConfig from '../../rollup.base.js'

export default {
  ...baseConfig,
  external: [
    'lodash.isarray',
    'lodash.isempty',
    'lodash.isequal',
    'lodash.isboolean',
    'lodash.isnumber',
    'lodash.isdate',
    'lodash.padstart',
    'lodash.isnan',
    'lodash.isnil',
    'lodash.isstring',
    'lodash.isobject',
  ],
}
