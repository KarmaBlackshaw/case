# @jeash/case
A lightweight package for converting string cases. It provides two methods, titleCase and kebabCase, to convert a string to title case or kebab case, respectively.

### Installation
Install `@jeash/case` using npm:

```bash
npm install @jeash/case
```

### Usage
Here is an example of how to use @jeash/case:

```js
import { titleCase, kebabCase } from '@jeash/case';

const myTitleCaseString = titleCase('hello world');
const myKebabCaseString = kebabCase('hello world');
```


Alternatively, you can import the methods individually:
```js
import titleCase from '@jeash/case/titleCase';
import kebabCase from '@jeash/case/kebabCase';

const myTitleCaseString = titleCase('hello world');
const myKebabCaseString = kebabCase('hello world');
```

### API

`@jeash/case` exports the following methods:

**kebabCase**
```js 
kebabCase('Hello World') // => hello-world
 ````

**sentenceCase**
```js 
sentenceCase('Hello World') // => Hello world
 ````

**titleCase**
```js 
titleCase('Hello World') // => Hello World
 ````

### Contributing
Contributions to `@jeash/case` are welcome. If you have any bug fixes, improvements or feature requests, please submit a pull request on GitHub.
