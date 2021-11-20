import baseConfig from '../../rollup.base'

export default {
  ...baseConfig,
  external: ['@baloise/web-app-validators', 'lodash.isarray', 'vue'],
}
