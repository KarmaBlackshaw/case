const resolve = require('@rollup/plugin-node-resolve')
const commonjs = require('@rollup/plugin-commonjs')
const babel = require('@rollup/plugin-babel')
const fg = require('fast-glob')

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

const plugins = [
  resolve({ extensions }),
  commonjs(),
  babel({ babelHelpers: 'runtime', extensions, include: ['src/**/*'] })
]

const files = fg.sync('./src/**/*.ts', {
  cwd: process.cwd(),
  ignore: ['./src/*.test.ts', './src/index.ts']
})

const inputs = files.reduce((acc, file) => {
  const name = file.split('/')[2]

  return { ...acc, [name]: file };
}, {});

const buildFunctions = Object.entries(inputs).map(([name, input]) => {
  return {
    input,
    output: [
      {
        file: `dist/${name}.js`,
        format: 'cjs',
        sourcemap: false
      },
      {
        file: `dist/${name}.esm.js`,
        format: 'esm',
        sourcemap: false
      }
    ],
    plugins
  }
});

buildFunctions.push({
  input: './src/index.ts',
  output: [
    {
      file: `dist/index.js`,
      format: 'cjs',
      sourcemap: false
    },
    {
      file: `dist/index.esm.js`,
      format: 'esm',
      sourcemap: false
    }
  ],
  plugins
})

module.exports = buildFunctions
