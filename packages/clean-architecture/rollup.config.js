import baseConfig from '../../rollup.base.js'
import typescript from 'rollup-plugin-typescript2'
import clear from 'rollup-plugin-clear';

export default {
  ...baseConfig,
  input: 'src/index.ts',
  external: [],
  plugins: [
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
