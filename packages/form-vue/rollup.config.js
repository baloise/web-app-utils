import baseConfig from '../../rollup.base'
import vue from 'rollup-plugin-vue'
import typescript from 'rollup-plugin-typescript2'
import clear from 'rollup-plugin-clear';

export default {
  ...baseConfig,
  input: 'src/index.ts',
  external: ['@baloise/web-app-validators', 'vue', 'yup', 'vee-validate', '@baloise/design-system-components-vue'],
  plugins: [
    vue(),
    typescript({
      tsconfigOverride: {
        compilerOptions: {
          declaration: true,
        },
        include: null,
      },
    }),
    clear({
      targets: ['./dist'],
    })
  ],
}
