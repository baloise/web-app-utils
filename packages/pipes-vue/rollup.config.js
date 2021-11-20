import baseConfig from '../../rollup.base'

export default {
  ...baseConfig,
  external: ['vue', '@baloise/web-app-pipes'],
}
