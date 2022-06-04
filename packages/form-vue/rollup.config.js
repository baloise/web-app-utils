import baseConfig from '../../rollup.base'
import vue from 'rollup-plugin-vue'
import typescript from 'rollup-plugin-typescript'

export default {
  ...baseConfig,
  input: 'src/index.ts',
  external: ['@baloise/web-app-validators', 'vue', 'yup', 'vee-validate', '@baloise/design-system-components-vue'],
  plugins: [
    typescript({
      tsconfig: false,
      experimentalDecorators: true,
      module: 'esnext',
    }),
    vue(),
  ],
}
