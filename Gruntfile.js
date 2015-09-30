var path = require('path');

module.exports = function(grunt) {
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

      all: { src: ['test/**/*.js'] }
    }
  });

  grunt.loadNpmTasks('grunt-express');
  grunt.loadNpmTasks('grunt-open');
  grunt.loadNpmTasks('grunt-simple-mocha');

  grunt.registerTask('default', ['express', 'open', 'express-keepalive']);
  grunt.registerTask('test', 'simplemocha');
};
