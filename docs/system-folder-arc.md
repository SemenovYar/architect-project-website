---
title: Системная папка .arc
---

### .arc в дирректории с настройками

>.arc - системная папка которая хранит бэкапы кодогенераций
> и нужные данные для Architect

Чтобы для вас не было сюрпризом, сразу хочется написать про .arc папку,
которая создаётся автоматически, если в вашем config.js
установлен флаг backups.

[Подробнее о флагах здесь Flags](/docs/flags)

Также .arc может хранить в себе папку history, если вы
пользуете CLI командами convert module_to_atom и convert atom_to_module.

[Подробнее о CLI командах здесь CLI](/docs/cli-command)

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