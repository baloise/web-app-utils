import baseConfig from '../../rollup.base.js'

export default {
  ...baseConfig,
  external: ['vue', '@baloise/web-app-pipes'],
}
