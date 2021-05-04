
# micronode

CLI to Build Microservice Architectures using nodejs + express

There tends to be a lot of boilerplate code that gets implemented when creating services / APIs
using `nodejs` and `expressjs`. This CLI hopes to automate some of the repetitive configuration associated with
building microservices.

[![Version](https://img.shields.io/npm/v/micronode.svg)](https://npmjs.org/package/micronode)
[![Downloads/week](https://img.shields.io/npm/dw/micronode.svg)](https://npmjs.org/package/micronode)
[![License](https://img.shields.io/npm/l/micronode.svg)](https://github.com/gtaylor5/micronode/blob/master/package.json)



# Usage
```sh-session
$ npm install -g micronode
$ micronode --help [COMMAND]
USAGE
  $ micronode COMMAND
```
## Commands
* `create-service  Create a new microservice`
* `help            display help for micronode`

## `micronode create-service <service-name`

```
Create a new microservice.

USAGE
  $ micronode create-service [NAME]

OPTIONS
  -d, --dir=dir  (required) [default: /Users/gerardt/Desktop/micronode] Location to place the new service.
  -h, --help     show CLI help

EXAMPLE
  $ mn create-service gateway .
```



  
## Authors

- [@Gerard Taylor](https://www.github.com/gtaylor5)