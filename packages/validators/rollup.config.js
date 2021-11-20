import baseConfig from '../../rollup.base'

export default {
  ...baseConfig,
  external: ['lodash.isnil', 'lodash.isnumber', '@baloise/web-app-utils'],
}
