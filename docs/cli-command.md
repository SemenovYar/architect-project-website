---
title: CLI команды
---

## Структура CLI команд

Чтобы посмотреть все команды, напишите `arc` в вашем терминале
и вы увидите это 
```shell
Options:
  -V, --version           output the version number
  -w, --watch             use watcher
  -e, --eslint            use esLint
  -mta, --module_to_atom  from module to atom
  -atm, --atom_to_module  from atom to module
  -u, --undo              undoing changes
  -r, --redo              redoing changes
  -c, --config <path>     path of the configuration to use
  -h, --help              display help for command

Commands:
  start|s                 Start architect-project generation
  convert|con             Convert source-map
  change                  Undoing and Redoing Changes
  help [command]          display help for command
```

## Команда arc start|s 

Чтобы запустить генерацию файлов, основанную на шаблонах и source-map,
которые мы рассмотрели в предыдущих главах, вам необходиму запустить
`arc start|s` . 

Эту команду вы можете запустить с флагами
`arc s --watch |--eslint |--config <path>`
>`-w, --watch` - этот флаг позволяет запустить слежение за файлами,
> указанными в `config.js`

>`-e, --eslint` - этот флаг запускает Eslint, который смотрит сгенерированные
> файлы и приводит их в порядок 

*обязательно должны быть файлы `.eslintrc.js` и `.prettierrc.js`
если вы этим пользуетесь в корне проекта*

> `-c, --config <path>`  - этот флаг позволяет запустить Architect
> с кастомным путём к дирректории с настройками 

*по дефолту эта дирректория должна называться `architect`*

## Команда arc convert|con

`arc convert` используется для того, чтобы переводить `source-map`
из модульного в атомарное состояние

Эту команду вы можете запустить с флагами
`arc con  --module_to_atom |--atom_to_module`

## Команда arc change

Каждый раз, когда вы используете 
`arc con  --module_to_atom |--atom_to_module` Architect 
сохраняет в историю предыдущие состояния `source-map` 
Если вдруг вы сделали что-то не так, вы легко можете
отменить свои действия используя команду
`arc change`

Эту команду вы можете запустить с флагами
`arc change --undo |--redo`

***
Теперь, когда мы разобрались с CLI команды, осталось рассмотреть
возможность работы с assets и функцией main