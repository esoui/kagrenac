[![Version](https://img.shields.io/npm/v/kagrenac.svg)](https://npmjs.org/package/kagrenac)
[![CircleCI](https://circleci.com/gh/esoui/kagrenac/tree/master.svg?style=shield)](https://circleci.com/gh/esoui/kagrenac/tree/master)
[![Codecov](https://codecov.io/gh/esoui/kagrenac/branch/master/graph/badge.svg)](https://codecov.io/gh/esoui/kagrenac)
[![Downloads](https://img.shields.io/npm/dw/kagrenac.svg)](https://npmjs.org/package/kagrenac)
[![License](https://img.shields.io/npm/l/kagrenac.svg)](https://github.com/esoui/kagrenac/blob/master/package.json)

# Kagrenac

> [Lord Kagrenac](https://en.uesp.net/wiki/Lore:Kagrenac) was the Dwemeri Chief Tonal Architect during the time of the First Council. The foremost arcane philosopher and magecrafter of the Dwemer, he was a "pioneer" in the field of mythopoeic forces, and devised tools with which to harness them with the intent of transcending the limits of Dwemer mortality.

## About

**Kagrenac** is CLI tool to aid in developing and publishing Elder Scrolls® Online add-ons on [ESOUI](https://www.esoui.com).

## Usage

<!-- usage -->
```sh-session
$ npm install -g kagrenac
$ kag COMMAND
running command...
$ kag (-v|--version|version)
kagrenac/0.1.2 linux-x64 node-v11.8.0
$ kag --help [COMMAND]
USAGE
  $ kag COMMAND
...
```
<!-- usagestop -->

## Commands

<!-- commands -->
* [`kag create TITLE`](#kag-create-title)
* [`kag help [COMMAND]`](#kag-help-command)

### `kag create TITLE`

create new add-on from a template

```
USAGE
  $ kag create TITLE

ARGUMENTS
  TITLE  add-on name that will be displayed in game

OPTIONS
  -a, --api=api                  [default: 100026] interface version the add-on is compatible with
  -d, --description=description  description of the add-on
  -h, --help                     show CLI help
  -n, --name=name                name of the add-on

  -p, --path=path                (required) [default: /home/arthur/Documents/Elder Scrolls Online/live/AddOns] where the
                                 add-on will be created

  -t, --template=template        (required) [default: standalone] name of built-in template or path to your own

  -u, --author=author            [default: Your Name] author of the add-on

  -v, --variables=variables      space separated name of saved variables

EXAMPLE
  $ kagrenac create
```

_See code: [src/commands/create.ts](https://github.com/esoui/kagrenac/blob/v0.1.2/src/commands/create.ts)_

### `kag help [COMMAND]`

display help for kag

```
USAGE
  $ kag help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.1.6/src/commands/help.ts)_
<!-- commandsstop -->

## Legal

[The MIT License](LICENSE) © 2019 ESOUI Community.

This project is not created by, affiliated with, or sponsored by ZeniMax Media Inc. or its affiliates. The Elder Scrolls® and related logos are registered trademarks or trademarks of ZeniMax Media Inc. in the United States and/or other countries. All rights reserved. The usage of add-ons is governed by the [Add-on Terms of Use](https://account.elderscrollsonline.com/add-on-terms).
