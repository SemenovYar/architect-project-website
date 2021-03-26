---
title: Флаги
---

## Структура флагов

Работа с флагами определяется в config.js

Пример структуры флагов
```shell
module.exports = {
  output: 'output-test',
  replace: false,
  clean: false,
  itrStart: '{{',
  itrEnd: '}}',
  itrFileNameStart: '[',
  itrFileNameEnd: ']',
  templateExt: '.txt',
  esLint: {
    quiet: true,
  },
  templates: {
    endpoints: {
      clean: true,
      replace: true,
      watch: ['swagger.js'],
    },
  },
};
```
Флаги `clean, replace, watch` можно определять как для всего проекта, который вы
хотите сгенерировать, так и для отдельного шаблона. При чём приоритет выше, если
вы укажете для конкретного шаблона. Например, если вы используете флаг
`clean` - этот флаг отчищает дирректорию перед каждой новой генерацией,
это сделано для того, чтобы отчистить файлы, относящиеся к определенному шаблону, 
а не ко всем файлам проекта.


## Флаг esLint

Если вы работаете с EsLint, Architect это тоже умеет. Сейчас мы разберем как 
работает флаг `quiet` он принимает `true | false`. Если `false` , то вы будете
получать ошибки EsLint , если вдруг в ваших файлах в шаблонах есть неправильный
по мнению EsLint код. Избежать этого можно используя `quiet: true`.
*По дефолту значение `false`*

## Флаг clean

Об этом флаге мы уже говорили выше, он принимает `true | false` 
, и если `true`, то он очищает дирректорию перед каждой новой генерацией файлов.
*По дефолту значение `false`*

## Флаг replace

Этот флаг даёт возможность перезаписать файлы или наоборот защитить их от 
перезаписи. Так же принимает `true | false` . *По дефолту значение `true`*

## Флаг watch

Этот флаг необходим для CLI команды `arc --watch`. Здесь вы передаёте
путь к файлу относительно дирректории с настройками, 
за которым будет следить Architect

***

В общем с флагами всё довольно просто, вам нужно немного поиграться с ними,
чтобы понять как они работают. Теперь самое время переходить к CLI командам.