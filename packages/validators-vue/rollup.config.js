import baseConfig from '../../rollup.base.js'

export default {
  ...baseConfig,
  external: ['@baloise/web-app-validators', 'lodash.isarray', 'vue'],
}
