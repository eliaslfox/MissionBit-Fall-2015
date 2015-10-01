# MissionBit-Fall-2015

My project for Mission Bit, Fall 2015 demo day.

## Progress so far

### Npm

All of the packages are up to date and saved as standard or dev requirments.

### Grunt

Grunt is setup with the following commands which can be run with,

```shell
grunt [command]
```

* lint - run jshint
* test - run mocha
* deploy - run both jslint and mocha
* open - start the server and open it in browser

Lint runs on the following directories

* *.js
* test/**/*.js

### Mocha

Mocha is enabled for testing and currently checks tests/**/*.js. At the moment
it tests the following modules

* test/mocha - tests mocha itself
* test/app - tests the main app file

## TODO

* move index.js to app.js
* create ./lib and add it to mocha and jshint
