const path = require('path');

const resolve = require('@rollup/plugin-node-resolve')
const commonjs = require('@rollup/plugin-commonjs')
const babel = require('@rollup/plugin-babel')
const fg = require('fast-glob')

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

const files = fg.sync('./src/*.ts', {
  cwd: process.cwd(),
  ignore: ['./src/*.test.ts'],
})

const inputs = files.reduce((acc, file) => {
  const extension = path.extname(file); // returns '.tsx'
  const basename = path.basename(file, extension);

  return {...acc, [basename]: file};
}, {});

module.exports = Object.entries(inputs).map(([folder, input]) => ({
  input,
  output: [
    {
      file: `dist/${folder}.js`,
      format: 'cjs',
      sourcemap: false,
    },
    {
      file: `dist/${folder}.esm.js`,
      format: 'esm',
      sourcemap: false,
    },
  ],
  plugins: [
    resolve({ extensions }),
    commonjs(),
    babel({ babelHelpers: 'runtime', extensions, include: ['src/**/*'] }),
  ],
}));
