---
title: Конфигурация Source-Map
---

## Структура source-map-module.js

Для начада разберем из чего состоит файл source-map-module.js
В нем есть два объекта aliases и map. Aliases используются 
для удобства записи названий шаблонов, но Architect также понимает и полное название.

Пример aliases
```shell
aliases: {
    rc: 'react-component',
    s: 'store',
    ix: 'index',
    i: 'icons',
  }
```
Основной элемент это map в нем вы указываете пути, по которым будут разложены
сгенерированные файлы. Внтури каждого пути есть объект, ключ которого это название 
компонента, который вы хотите создать, а значение - объект с настройками компонента.

Пример map
```shell
map: {
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
  }
}
```
В объект с настройками вы можете положить assets, 
который указывает на папку с файлами, которые вам нужны. Эти файлы будут доступны
в `_script_.js` указанного в source-map шаблона. В нашем примере по пути 
`*templates/icons/_script_.js`

Также объект с настройками вы можете положить любую переменную, которая
вам необходима в нашем примере это `test: '123'`, которую вы можете использовать
при написании шаблонов как в названии папок или файлов через `[test]` , так и внутри 
файла шаблона через `{{test}}`

Вот так выглядит итоговый файл source-map-module.js
```shell
module.exports = {
  aliases: {
    rc: 'react-component',
    s: 'store',
    ix: 'index',
    i: 'icons',
  },
  map: {
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
  },
};
```

Вы можете с легкостью добавлять нужные вам пути, компоненты и остальные настройки, 
которые нужны для решения ваших задач.

## Структура source-map-atom.js

Как видно из названия source-map-module.js использует модульный подход к построению
архитектуры сгенерированных файлов, но иногода вам может потребоваться атомарная 
структура для удобства решения ваших задач. Команда разработчиков Architect об этом 
позаботилась.

Например возмём из предыдущего примера source-map-module.js и используем CLI 
команду `arc convert --module_to_atom`, эта команда создаст файл source-map-atom.js

Который будет выглядеть вот так
```shell
module.exports = {
  aliases: {
    rc: 'react-component',
    s: 'store',
    ix: 'index',
    i: 'icons',
  },
   map: {
    icons: [ ['icons',
        {
          assets: 'icons-sprite',
          test: '123',
          path: 'src/components'
        }
      ] ],
    index: [ ['index', { path: 'src/components/inputs' } ] ],
    button: [ ['react-component', { path: 'src/components/inputs' } ] ],
    textarea: [ ['react-component', { path: 'src/components/inputs' } ] ],
    input: [ ['react-component', { path: 'src/components/inputs' } ] ],
    'input-select': [ ['react-component', { path: 'src/components/inputs' } ] ]
  },
};
```

На первый взгляд выглядит немного сложнее, но когда вы начнёте пользоваться, поймёте
насколько это удобно.

## Как Architect использует source-map-module.js и source-map-atom.js

Вы можете работать как по отдельности с source-map-module.js или source-map-atom.js
так и вместе, если какого-то файла нет, Architect выдаст ошибку в консоль 

`Can not find file source-map-module.js | source-map-atom.js`

Но это не повлиеят на корректную работу Architect, хотя бы один файл должен быть для
корректной работы.
***
Теперь, когда мы разобрались с конфигурацией Source-Map файлов, самое время переходить
к описанию флагов, которые расширяют возможности работы с Architect
и делают её гораздо удобнее.