# build-ozc

[![apm](https://img.shields.io/apm/l/build-ozc.svg?style=flat-square)](https://atom.io/packages/build-ozc)
[![apm](https://img.shields.io/apm/v/build-ozc.svg?style=flat-square)](https://atom.io/packages/build-ozc)
[![apm](https://img.shields.io/apm/dm/build-ozc.svg?style=flat-square)](https://atom.io/packages/build-ozc)
[![Travis](https://img.shields.io/travis/idleberg/atom-build-ozc.svg?style=flat-square)](https://travis-ci.org/idleberg/atom-build-ozc)
[![David](https://img.shields.io/david/idleberg/atom-build-ozc.svg?style=flat-square)](https://david-dm.org/idleberg/atom-build-ozc#info=dependencies)
[![David](https://img.shields.io/david/dev/idleberg/atom-build-ozc.svg?style=flat-square)](https://david-dm.org/idleberg/atom-build-ozc?type=dev)

[Atom Build](https://atombuild.github.io/) provider for `ozc`, compiles Oz. Supports the [linter](https://atom.io/packages/linter) package for error highlighting.

## Installation

### apm

Install `build-ozc` from Atom's [Package Manager](http://flight-manual.atom.io/using-atom/sections/atom-packages/) or the command-line equivalent:

`$ apm install build-ozc`

### GitHub

Change to your Atom packages directory:

```bash
# Windows
$ cd %USERPROFILE%\.atom\packages

# Linux & macOS
$ cd ~/.atom/packages/
```

Clone repository as `build-ozc`:

```bash
$ git clone https://github.com/idleberg/atom-build-ozc build-ozc
```

## Usage

### Build

Before you can build, select an active target with your preferred build option.

Available targets:

* `Oz --[dump|execute|core|scode|ecode|executable]` — compile script

### Shortcuts

Here's a reminder of the default shortcuts you can use with this package:

**Select active target**

<kbd>Cmd</kbd>+<kbd>Alt</kbd>+<kbd>T</kbd> or <kbd>F7</kbd>

**Build script**

<kbd>Cmd</kbd>+<kbd>Alt</kbd>+<kbd>B</kbd> or <kbd>F9</kbd>

**Jump to error**

<kbd>Cmd</kbd>+<kbd>Alt</kbd>+<kbd>G</kbd> or <kbd>F4</kbd>

**Toggle build panel**

<kbd>Cmd</kbd>+<kbd>Alt</kbd>+<kbd>V</kbd> or <kbd>F8</kbd>

## License

This work is licensed under the [The MIT License](LICENSE.md).

## Donate

You are welcome support this project using [Flattr](https://flattr.com/submit/auto?user_id=idleberg&url=https://github.com/idleberg/atom-build-ozc) or Bitcoin `17CXJuPsmhuTzFV2k4RKYwpEHVjskJktRd`
