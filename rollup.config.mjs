import commonjs from '@rollup/plugin-commonjs'
import nodeResolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import rollupJson from '@rollup/plugin-json'
import dts from 'rollup-plugin-dts'
import packageJson from './package.json' assert { type: 'json' }

export default [
  {
    input: 'src/index.ts',
    watch: true,
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      nodeResolve(),
      commonjs(),
      rollupJson(),
      typescript({ tsconfig: './tsconfig.json' }),
    ],
  },
  {
    input: 'dist/esm/@types/src/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts()],
  },
]
