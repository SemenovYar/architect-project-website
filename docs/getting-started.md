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
[ExmpleTemplates](https://nodejs.org/)

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
### Добавляем в структуру _script.js_ и methods.js

Если вы хотите использовать вспомогательные функции 
для генерации ваших файлов,
вы можете использовать _script.js_ и methods.js. 
Разница между ними заключается в том, что _script.js_ работает для 
каждого конкретного шаблона, когда
methods.js может выполнять функции для всех шаблонов.
Architect сначала ищет функциию в _script.js_, затем в methods.js и если
не находит в этих двух файлах, вы получите ошибку
```shell
Not found function <functionName> in template <template>
```
Вот так выглядит структура с _script.js_ и methods.js
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

### Добавляем в структуру папку с assets

Если вам необходимо работать с файлами, например вы хотите
преобразовать icons-sprite, вам необходимо поместить их в папку assets.
Далее вы сможете указать их в source-map-module.js, чтобы в дальнейшем
ваши icons-sprite были доступны в _script_.js.

Подробнее о source-map-module.js по ссылке 
[Source-map](https://nodejs.org/)

Подробнее об assets здесь [Assets](https://nodejs.org/)

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
### .arc в дирректории с настройками

Чтобы для вас не было сюрпризом, сразу хочется написать про .arc папку,
которая создаётся автоматически, если в вашем config.js 
установлен флаг backups. 

Подробнее о флагах здесь [Flags](https://nodejs.org/)

Также .arc может хранить в себе папку history, если вы
пользуете CLI командами convert module_to_atom и convert atom_to_module.

Подробнее о CLI командах здесь [CLI](https://nodejs.org/)

В итоге вот так выглядит структура с .arc

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
