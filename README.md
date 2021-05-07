
# micronode

A simple CLI to Build Microservice Architectures using nodejs + express

There tends to be a lot of boilerplate code that gets implemented when creating services / APIs
using `nodejs` and `expressjs`. This CLI hopes to automate some of the repetitive configuration associated with building microservices.

[![Version](https://img.shields.io/npm/v/micronode.svg)](https://npmjs.org/package/micronode-cli)
[![Downloads/week](https://img.shields.io/npm/dw/micronode.svg)](https://npmjs.org/package/micronode-cli)
[![License](https://img.shields.io/npm/l/micronode.svg)](https://github.com/gtaylor5/micronode/blob/master/package.json)



# Usage
```sh-session
$ npm install -g micronode
$ micronode --help [COMMAND]

USAGE
  $ micronode COMMAND
  $ micronode create-service <service-name> -d <path>
```
## Commands
### **`create-service`**  -> Create a new microservice
```
Create a new microservice.

USAGE
  $ micronode create-service [NAME] -d [PATH]

OPTIONS
  -d, --dir=dir  (required) [default: Current Directory] Location to place the new service.
  -h, --help     show CLI help

EXAMPLE
  $ mn create-service gateway .

OUTPUT

The output is a scaffold with a pre configured service
that has the following:

- Dockerfile -> Generates a container image for your service
- index.js -> Server definition for your service
- api/api.js -> Simple CRUD Routes.

gateway/
  Dockerfile
  index.js
  api/
    api.js
```



  
## Authors

- [@Gerard Taylor](https://www.github.com/gtaylor5)
