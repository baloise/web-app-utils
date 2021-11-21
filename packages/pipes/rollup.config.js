import baseConfig from '../../rollup.base'

export default {
  ...baseConfig,
  external: ['lodash.capitalize', 'lodash.round', 'lodash.isarray', 'lodash.isstring', '@baloise/web-app-utils'],
}
