import baseConfig from '../../rollup.base.js'

export default {
  ...baseConfig,
  external: ['lodash.isnil', 'lodash.isnumber', '@baloise/web-app-utils'],
}
