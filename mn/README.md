micronode
=========

CLI to Build Microservice Architectures using nodejs + express

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/micronode.svg)](https://npmjs.org/package/micronode)
[![Downloads/week](https://img.shields.io/npm/dw/micronode.svg)](https://npmjs.org/package/micronode)
[![License](https://img.shields.io/npm/l/micronode.svg)](https://github.com/gtaylor5/micronode/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g micronode
$ micronode COMMAND
running command...
$ micronode (-v|--version|version)
micronode/1.0.0 darwin-x64 node-v12.18.2
$ micronode --help [COMMAND]
USAGE
  $ micronode COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`micronode hello [FILE]`](#micronode-hello-file)
* [`micronode help [COMMAND]`](#micronode-help-command)

## `micronode hello [FILE]`

describe the command here

```
USAGE
  $ micronode hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ micronode hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/gtaylor5/micronode/blob/v1.0.0/src/commands/hello.ts)_

## `micronode help [COMMAND]`

display help for micronode

```
USAGE
  $ micronode help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.2/src/commands/help.ts)_
<!-- commandsstop -->
