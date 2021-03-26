---
title: Начало работы
slug: /
---

## Установка

Установите architect-project с помощью npm 
```shell
npm install --save-dev architect-project
```
или yarn 
```shell
yarn add --dev architect-project
```
## Подготовительные работы
### Простая структура
Для запуска генерации кода с помощью architect-project вам 
необходимо создать дирректорию с настройками.
Самая простая структура настроек указана ниже, но вы можете сделать её 
какой захотите. Мы будем идти от простого к сложному. 

Или скачайте готовые настройки по данной ссылке 
[ExmpleTemplates](https://github.com/GTOsss/architect-project)

Вот так выглядит простая структура
```shell
architect
├── source_map
│   └── source-map-module.js
├── templates
│   └── component
│       └── [name]
│           ├── [name].ts.txt
│           └── index.ts.txt
└── config.js
```
*Разрешение файлов внутри шаблонов указано `txt`, это сделано для того, чтобы
ваша IDE не ругалась, в нашем примере итоговые сгенерированные файлы будут
`ts` так как `txt` отсечётся, настроить это можно в `config.js`*
### Добавляем в структуру `_script.js_` и methods.js

Если вы хотите использовать вспомогательные функции 
для генерации ваших файлов,
вы можете использовать `_script.js_` и methods.js. 
Разница между ними заключается в том, что `_script.js_` работает для 
каждого конкретного шаблона, когда
methods.js может выполнять функции для всех шаблонов.
Architect сначала ищет функциию в `_script.js_`, затем в methods.js и если
не находит в этих двух файлах, вы получите ошибку
```shell
Not found function <functionName> in template <template>
```
Вот так выглядит структура с `_script.js_` и methods.js
```shell
architect
├── source_map
│   └── source-map-module.js
├── templates
│   └── component
│       └── [name]
│           ├── [name].ts.txt
│           ├── index.ts.txt
│           └── _script_.js
├── methods.js
└── config.js
```
>source-map/source-map-module.js:
тут перечислены все пути в которых нужно создать файлы по опредленным шаблонам

>templates/component
в директории templates описаны шаблоны по которым будут создаваться файлы,
> в данном пример присутствует только 1 шаблон который называется 'component'.

>config.js: общая конфигурация Architect

### Добавляем в структуру папку с assets

Если вам необходимо работать с файлами, например вы хотите
преобразовать  svg файлы иконок в реакт компоненты или задокументировать
их в storybook, вам необходимо поместить их в папку assets.
Далее вы сможете указать директорию с файлами в source-map-module.js 
и она будет доступна в методах `_script_.js` нужного шаблона.

 
[Подробнее о source-map-module.js](/docs/config-source-map)

[Подробнее об assets здесь](/docs/assets-and-main)

Вот так выглядит структура с assets

```shell
architect
├── assets
│   └── icons-sprite
│       ├── arrow-right.svg
│       └── blue-posts.svg
├── source_map
│   └── source-map-module.js
├── templates
│   └── component
│       └── [name]
│           ├── [name].ts.txt
│           ├── index.ts.txt
│           └── _script_.js
├── methods.js
└── config.js
```

***
Теперь, когда мы разобрались со структурой дирректории с настройками
Architect, самое время перейти к конфигурации source-map.
