import fs from 'fs'
import path from 'path'
import fg from 'fast-glob'

async function run() {

  const files = fg.sync('./src/**/*.ts', {
    cwd: process.cwd(),
    ignore: ['./src/*.test.ts', './src/index.ts']
  })

  const apis = await (async () => {
    let content = ''

    const names = files.map(file => file.split('/')[2])

    const testWord = 'Hello World'

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const { default: func } = await import(path.join('../', file))

      const name = names[i]

      content += `**${name}**\n`
      content += `\`\`\`js \n${name}('${testWord}') // => ${func(testWord)}\n \`\`\`\`\n\n`
    }

    return content.trim()
  })()

  const readmeTemplate = `# @jeash/case
A lightweight package for converting string cases. It provides two methods, titleCase and kebabCase, to convert a string to title case or kebab case, respectively.

### Installation
Install \`@jeash/case\` using npm:

\`\`\`bash
npm install @jeash/case
\`\`\`

### Usage
Here is an example of how to use @jeash/case:

\`\`\`js
import { titleCase, kebabCase } from '@jeash/case';

const myTitleCaseString = titleCase('hello world');
const myKebabCaseString = kebabCase('hello world');
\`\`\`


Alternatively, you can import the methods individually:
\`\`\`js
import titleCase from '@jeash/case/titleCase';
import kebabCase from '@jeash/case/kebabCase';

const myTitleCaseString = titleCase('hello world');
const myKebabCaseString = kebabCase('hello world');
\`\`\`

### API

\`@jeash/case\` exports the following methods:

${apis}

### Contributing
Contributions to \`@jeash/case\` are welcome. If you have any bug fixes, improvements or feature requests, please submit a pull request on GitHub.
`;

  fs.writeFileSync('README.md', readmeTemplate);
}

run()