import json from 'rollup-plugin-json'
import typescript from 'rollup-plugin-typescript2'
import commonjs from 'rollup-plugin-commonjs'
import external from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import resolve from 'rollup-plugin-node-resolve'
import url from 'rollup-plugin-url'
import svgr from '@svgr/rollup'
import react from 'react'

export default {
    input: 'src/Dropzone.tsx',
    experimentalCodeSplitting: true,
    output: [
      {
        file: 'dist/index.js',
        format: 'cjs',
        exports: 'named',
        sourcemap: true,
      },
      {
        file: 'dist/index.es.js',
        format: 'es',
        exports: 'named',
        sourcemap: true,
      },
    ],
    plugins: [
      json(),
      external(),
      postcss({
        modules: true,
      }),
      url(),
      svgr(),
      resolve(),
      typescript({
        rollupCommonJSResolveHack: true,
        clean: true,
      }),
      commonjs({
        namedExports: {
          react: Object.keys(react),
        },
      }),
    ],
}
