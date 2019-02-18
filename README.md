[![Version](https://img.shields.io/npm/v/kagrenac.svg)](https://npmjs.org/package/kagrenac)
[![CircleCI](https://circleci.com/gh/esoui/kagrenac/tree/master.svg?style=shield)](https://circleci.com/gh/esoui/kagrenac/tree/master)
[![Appveyor CI](https://ci.appveyor.com/api/projects/status/github/esoui/kagrenac?branch=master&svg=true)](https://ci.appveyor.com/project/esoui/kagrenac/branch/master)
[![Downloads](https://img.shields.io/npm/dw/kagrenac.svg)](https://npmjs.org/package/kagrenac)
[![License](https://img.shields.io/npm/l/kagrenac.svg)](https://github.com/esoui/kagrenac/blob/master/package.json)

# Kagrenac

> Lord Kagrenac was the Dwemeri Chief Tonal Architect during the time of the First Council. The foremost arcane philosopher and magecrafter of the Dwemer, he was a "pioneer" in the field of mythopoeic forces, and devised tools with which to harness them with the intent of transcending the limits of Dwemer mortality.

## About

**Kagrenac** is CLI tool to aid in developing and publishing Elder Scrolls® Online add-ons on [ESOUI](https://www.esoui.com).

<!-- toc -->

- [Usage](#usage)
- [Commands](#commands)

<!-- tocstop -->

# Usage

<!-- usage -->

```sh-session
$ npm install -g kagrenac
$ kagrenac COMMAND
running command...
$ kagrenac (-v|--version|version)
kagrenac/0.0.0 linux-x64 node-v11.8.0
$ kagrenac --help [COMMAND]
USAGE
  $ kagrenac COMMAND
...
```

<!-- usagestop -->

# Commands

<!-- commands -->

- [`kagrenac hello [FILE]`](#kagrenac-hello-file)
- [`kagrenac help [COMMAND]`](#kagrenac-help-command)

## `kagrenac hello [FILE]`

describe the command here

```
USAGE
  $ kagrenac hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ kagrenac hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/esoui/kagrenac/blob/v0.0.0/src/commands/hello.ts)_

## `kagrenac help [COMMAND]`

display help for kagrenac

```
USAGE
  $ kagrenac help [COMMAND]

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
