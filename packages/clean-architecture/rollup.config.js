import baseConfig from '../../rollup.base.js'

export default {
  ...baseConfig,
  external: ['immer', 'lodash.clonedeep', 'yup'],
}
