# Kagrenac

> Lord Kagrenac was the Dwemeri Chief Tonal Architect during the time of the First Council. The foremost arcane philosopher and magecrafter of the Dwemer, he was a "pioneer" in the field of mythopoeic forces, and devised tools with which to harness them with the intent of transcending the limits of Dwemer mortality.

## About

**Kagrenac** is CLI tool to aid in developing and publishing Elder Scrolls® Online add-ons on [ESOUI](https://www.esoui.com).

## Usage

You'll need use Node.js 1.10 or newer. Run:

```shell
$ npm i kegranac -g
```

Then use:

```shell
$ kegranac -h
```

To get a list of options.

## Options

...

## Roadmap

Bucket list:

- Global config with author information, ESOUI account, etc.
- Local config with add-on ID on ESOUI, ignore list, and other meta data.
- Bootstrap a new add-on from an existing template (standalone, library, custom).
- Pack and publish to ESOUI using the [Update API](https://www.esoui.com/forums/showthread.php?p=28513).
- Run add-on manifest validation and possibly dependency resolution.
- Run linters for Lua and XML and automated tests (using [Busted](https://olivinelabs.com/busted/)).

Things it'll need (easier to search for libraries later on):

- A task runner (such as Grunt, Gulp, etc).
- Copy directory recursively.
- Template parsing.
- Package Global state.
- Lua and XML tools.
- An HTTP client.

## Legal

... © 2019 ESOUI Community

This project is not created by, affiliated with, or sponsored by ZeniMax Media Inc. or its affiliates. The Elder Scrolls® and related logos are registered trademarks or trademarks of ZeniMax Media Inc. in the United States and/or other countries. All rights reserved. The usage of add-ons is governed by the [Add-on Terms of Use](https://account.elderscrollsonline.com/add-on-terms).
