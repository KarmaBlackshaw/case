import fg from 'fast-glob'
import path from 'path'
import fs from 'fs'
import pkg from '../package.json'

const files = fg.sync('./src/*.ts', {
  cwd: process.cwd(),
  ignore: ['./src/*.test.ts', './src/index.ts'],
})

let contents = ''
let exportFunctions: string[] = []
const pkgExports = {
  '.': {
    require: './dist/index.js',
    import: './dist/index.esm.js',
  }
}

files.forEach(file => {
  const extension = path.extname(file); // returns '.tsx'
  const basename = path.basename(file, extension);

  contents += `import ${basename} from './${basename}'\n`

  exportFunctions.push(basename)

  // @ts-ignore
  pkgExports[`./${basename}`] = {
    require: `./dist/${basename}.js`,
    import: `./dist/${basename}.esm.js`,
  }
})

contents += `\nexport default { ${exportFunctions.join(', ')} }`

const indexPath = path.join(process.cwd(), 'src/index.ts')
fs.writeFileSync(indexPath, contents)

// @ts-ignore
pkg.exports = pkgExports


const pkgPath = path.join(process.cwd(), 'package.json')
fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2))
