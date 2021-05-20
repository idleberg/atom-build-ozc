# build-ozc

[![apm](https://flat.badgen.net/apm/license/build-ozc)](https://atom.io/packages/build-ozc)
[![apm](https://flat.badgen.net/apm/v/build-ozc)](https://atom.io/packages/build-ozc)
[![apm](https://flat.badgen.net/apm/dl/build-ozc)](https://atom.io/packages/build-ozc)
[![CircleCI](https://flat.badgen.net/circleci/github/idleberg/atom-build-ozc)](https://circleci.com/gh/idleberg/atom-build-ozc)
[![David](https://flat.badgen.net/david/dev/idleberg/atom-build-ozc)](https://david-dm.org/idleberg/atom-build-ozc?type=dev)

[Atom Build](https://atombuild.github.io/) provider for `ozc`, compiles Oz

## Installation

### apm

Install `build-ozc` from Atom's [Package Manager](http://flight-manual.atom.io/using-atom/sections/atom-packages/) or the command-line equivalent:

`$ apm install build-ozc`

### Using Git

Change to your Atom packages directory:

**Windows**

```powershell
# Powershell
$ cd $Env:USERPROFILE\.atom\packages
```

```cmd
:: Command Prompt
$ cd %USERPROFILE%\.atom\packages
```

**Linux & macOS**

```bash
$ cd ~/.atom/packages/
```

Clone repository as `build-ozc`:

```bash
$ git clone https://github.com/idleberg/atom-build-ozc build-ozc
```

Inside the cloned directory, install Node dependencies:

```bash
$ yarn || npm install
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

This work is licensed under the [The MIT License](LICENSE).
