---
title: Assets и функция main
---
## Работа с Assets

Мы помним, чтобы работать с файлами нам необходимо иметь папку с assets
```shell
architect
├── assets
│   └── icons-sprite
│       ├── arrow-right.svg
│       └── blue-posts.svg
```
Так же нужно чтобы вы указали assets в source-map в компоненте, который вам нужен

```shell
const map = {
  'src/components': {
    icons: { template: 'i', assets: 'icons-sprite', test: '123' },
  },
  'src/components/inputs': {
    index: 'ix',
    button: { template: 'rc' },
    textarea: 'rc',
    input: 'rc',
    'input-select': 'rc',
  },
};
```
Теперь в шаблоне в нашем примере `i:icons` в файле `_script_.js`
нам доступны файлы из `'icons-sprite'`

файл `templates/icons/_script_.js`

```shell
...
const minimizeSVG = (svg) => svg;


const main = (_, { assets, writeFile }) => {
  assets.forEach(({ content, fileName }) => {
    const result = minimizeSVG(content);
    writeFile(result, { path: `svg/${fileName}` });
  });
};

module.exports = {
  main,
  getIndexContent,
};
```
*Доступ к assets будет у любой функции, которую вы опишите в `_script_.js`*

Таким образом мы можем изменить наши файлы и сделать с ними что угодно, 
главное что у нас к ним есть доступ с помощью замечательных assets

## Функция main

В файле `_script_.js` мы можем описать функции, которые сможем вызвать в файлах шаблона.
Но что, если нам нужна функция, которая вызовется сама и сделает для нас что-то без вызова
её в шаблоне. Как раз для этого есть функция `main`.

Помимо assets функция `main` так же может принимать методы,
* `writeFile(content, { rPath })` 
* `writeFileStream({ data, rPath = '', fileName = 'test.txt' })`

## Асинхронное выполнение функций в `_script_.js` и methods.js

Если вам необходимо дождаться ответа в запросе
или вы используете асинхронные операции, Architect это умеет.
Работая с асинхронными функциями из `_script_.js` или methods.js,
Architect сначала их дожидается,
получает из них контент и только потом интерполирует шаблон.

```shell
// _script_.js

const axios = require('axios');
const fs = require('file-system');
const appRoot = process.cwd();
const { resolve } = require('path');

const main = async () => {
  const filePath = resolve(appRoot, 'output/ada_lovelace.jpg');

  const { data } = await axios({
    method: 'get',
    url: 'http://bit.ly/2mTM3nY',
    responseType: 'stream',
  });

  data.pipe(fs.createWriteStream(filePath));
};

module.exports = {
  main,
};
```