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
    }
  });

  grunt.loadNpmTasks('grunt-express');
  grunt.loadNpmTasks('grunt-open');

  grunt.registerTask('default', ['express', 'open', 'express-keepalive']);
};
