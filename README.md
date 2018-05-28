# NodeJS Bootstrap

## Overview
An example Node.js Express server structure with standard libraries

---

## Prerequisites
* [Node.js](https://nodejs.org/en/) - _you can see the current version used inside the Dockerfile_
* [Yarn](https://yarnpkg.com/lang/en/) - _Deterministic Package manager for Javascript_
* [Docker](https://www.docker.com/) - _Deployment container format_

---

## Getting the project up and running

Follow these steps to get the project up and running on your local machine:

1) Clone the [repository](https://github.com/FenrirWillow/node-bootstrap) - `git clone https://github.com/FenrirWillow/node-bootstrap.git`

2) Install all dependencies using Yarn - `yarn install`

3) Start the Node server in development mode - `npm run start:dev`

The server will start on port 3000 on your localhost. The development mode runs inside `nodemon` which watches the source directory and restarts the server any time a change is being saved. You can now start development!

## Environment variables

A lot of functionality of the server can be controlled via environment variables. This is a list of all available and short descriptions of what they do:

* `LOGGER_LEVEL` - controls which channels of the log system are getting piped to `stdout`. Available values are `verbose` | `debug` | `info` | `warning` | `error`. By default this is set to `debug`.
* `PORT` - controls which port the express server will bind itself to. By default this is set to port 3000.
