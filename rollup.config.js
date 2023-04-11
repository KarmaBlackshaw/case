const resolve = require('@rollup/plugin-node-resolve')
const commonjs = require('@rollup/plugin-commonjs')
const babel = require('@rollup/plugin-babel')

const fg = require('fast-glob')

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

const files = fg.sync('./src/**/index.ts', {
  cwd: process.cwd()
})

const inputs = files.reduce((acc, file) => {
  const [dir] = file.split('/').slice(-2, -1);
  // @ts-ignore
  acc[dir] = file;
  return acc;
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
