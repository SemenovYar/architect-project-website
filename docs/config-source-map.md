---
title: Конфигурация Source-Map
---
## Source-Map
При запуске, Architect читает source-map и создает файлы по
указанным в source-map шаблонам,
так же source-map хранит параметры, которые будут переданы в шаблон.

Есть 2 формата source-map,
оба совместимы друг с другом и можно использовать их одновременно.

>source-map-module больше подходит для самостоятельных сущностей, например:
компонент  button который будет много раз использоваться в разных местах.

>source-map-atom подходит для связанных друг с другом сущностей,
> например мы хотим сверстать страницу users, и для нее нужно
> создать сразу несколько папок в разных местах проекта по разным
> шаблонам но с одинаковых именем:
users-page,
users-component,
users-store.


## Структура source-map-module.js

Для начада разберем из чего состоит файл source-map-module.js
В нем есть два объекта aliases и map. Aliases используются 
для удобства записи названий шаблонов, но Architect также понимает и полное название.


Пример aliases
```shell
aliases: {
    rc: 'react-component',
    s: 'store',
  }
```
Основной элемент это map в нем вы указываете пути, по которым будут разложены
сгенерированные файлы. Внтури каждого пути есть объект, ключ которого это название 
компонента, который вы хотите создать, а значение - объект
с настройками компонента или строка с названием шаблона.

Все три записи ниже, будут работать одинаково

```shell
//source-map-module.js

const map = {
  'src/components': {
     button: 'react-component',
  },
};

module.exports = { map };
```

```shell
//source-map-module.js

const aliases = {
  rc: 'react-component',
};

const map = {
  'src/components': {
     button: 'rc',
  },
};

module.exports = { aliases, map };
```

```shell
//source-map-module.js

const aliases = {
  rc: 'react-component',
};

const map = {
  'src/components': {
    button: { template: 'rc' },
  },
};

module.exports = { aliases, map };
```

Пример source-map-module.js
```shell
const aliases = {
  rc: 'react-component',
};

const map = {
     'src/store': { 
       users: 'store' 
    },
    'src/components/inputs': {
      button: { template: 'rc' },
      textarea: 'rc',
      input: 'rc',
      'input-select': 'rc',
    },
  }
}

module.exports = { aliases, map };
```
В объект с настройками вы можете положить assets, 
который указывает на папку с файлами, которые вам нужны. Эти файлы будут доступны
в `_script_.js` указанного в source-map шаблона. В нашем примере по пути 
`*templates/icons/_script_.js`

Также объект с настройками вы можете положить любую переменную, которая
вам необходима. в нашем примере передается переменная test 
со значением 123, она будет вам доступна:
- в интерполяции имени файла через [test]
- в интерполяции шаблона через {test}
- во всех методах описанных в `_script_.js`

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
структура для удобства решения ваших задач. Атомарная структура состоит из нескольких
связанных друг с другом шаблонов.

Для удобства внутри source-map-atom.js есть объект `defaultParams` , в котором 
вы можете определить дефолтные настройки шаблонов. Но вы можете обойтись 
без него. Так же, `defaultParams` можно переопределить

```shell
const defaultParams = {
  'react-component': { path: 'src/components/users' },
};

const map = {
  users: ['react-component'], // путь возмётся из defaultParams
  friends: [['react-component', { path: 'src/components/friends' }]],
};

module.exports = { map };
```

Все три записи ниже, будут работать одинаково

```shell
const map = {
  button: [['react-component', { path: 'src/components' }]],
};

module.exports = { map };
```

```shell
const defaultParams = {
  'react-component': { path: 'src/components' },
};

const map = {
  button: ['react-component'],
};

module.exports = { map, defaultParams};
```

```shell
const aliases = {
  rc: 'react-component',
};

const defaultParams = {
  'react-component': { path: 'src/components' },
};

const map = {
  button: ['rc'],
};

module.exports = { map, defaultParams, aliases };
```

На первый взгляд выглядит немного сложнее, но когда вы начнёте пользоваться, поймёте
насколько это удобно.

## Релативные пути для source-map-atom.js

Иногда удобно переопределять пути из defaultParams, делая их относительными.
```shell
const defaultParams = {
  component: {path: 'src/page'}
}

const map = {
  stadiums: [['component', {rPath: '/test'}]], //Темплейт component создаст файл в src/page/test
};

module.exports = { map, defaultParams};
```

Ключевым словом здесь является `rPath`, ему вы можете передавать путь следующего 
вида: `'/test'`, `'test'`, `'test/test1/'`, `/test/test1`.

## source-map-atom.js VS source-map-module.js  

Ниже будут представлены два source-map, которые приведут одинаковому
результату генерации файлов

```shell
//source-map-atom.js 

const defaultParams = {
  'react-component': { path: 'src/components' },
  page: { path: 'src/pages' },
  store: { path: 'src/stores' },
};

const map = {
  users: ['react-component', 'page', 'store'],
};
```

```shell
//source-map-module.js

const map = {
  'src/components': {
    users: 'react-component',
  },
  'src/pages': {
    users: 'page',
  },
  'src/store': {
    users: 'store',
  },
};
```

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