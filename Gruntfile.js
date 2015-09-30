/*jslint node: true */
"use strict";

var path = require('path');

var gruntFile = function(grunt){
  grunt.initConfig({
    express: {
      server: {
        options: {
          hostname: '*',
          port: 3000,
          debug: true,
          server: path.resolve('./index.js')
        }
      }
    },
    open: {
      server: {
        path: "http://localhost:3000"
      }
    },
    simplemocha: {
      options: {
        globals: ['should'],
        timeout: 3000,
        ignoreLeaks: false,
        ui: 'bdd',
      },
    },

    jslint: {
     server: {
       src: [
         '*.js',
       ],
       exclude: [
         'Gruntfile.js'
       ],
       directives: {
          node: true,
        },
     },
     test: {
       src: [
         'test/**/*.js',
       ],
       exclude: [
         'Gruntfile.js'
       ],
       directives: {
          mocha: true,
          node: true,
        },
     }
   },
});

grunt.loadNpmTasks('grunt-express');
grunt.loadNpmTasks('grunt-open');
grunt.loadNpmTasks('grunt-simple-mocha');
grunt.loadNpmTasks('grunt-jslint');

grunt.registerTask('default', ['express', 'open', 'express-keepalive']);
grunt.registerTask('test', 'simplemocha');
}

module.exports = gruntFile;
