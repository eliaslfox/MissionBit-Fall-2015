var path = require('path');

module.exports = function(grunt){
    "use strict";
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        express: {
            server: {
                options: {
                    hostname: '*',
                    port: 3000,
                    debug: true,
                    server: path.resolve('./app.js')
                }
            }
        },
        open: {
            server: {
                path: "http://localhost:3000"
            }
        },
        jshint: {
            options: {
                reporter: require('jshint-stylish'),
                globals: {
                    //node
                    require: true,
                    module: true
                }

            },
            all: {
                src: [
                    './*.js',
                    'public/js/*.js'
                ]
            }
        },
        apidoc: {
            all: {
                src: ".",
                dest: "apidoc/",
                options: {
                    includeFilters: [ ".*\\.js$" ],
                    excludeFilters: [ "node_modules/" ]
                }
            }
        },
        uglify: {
            options: {
                beautify: true,
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
                mangle: false
            },
            all: {
                src: 'public/js/src/main.js',
                dest: 'public/js/dist/main.min.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-express');
    grunt.loadNpmTasks('grunt-open');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-apidoc');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['express', 'open', 'express-keepalive']);
    grunt.registerTask('build', ['jshint','apidoc', 'uglify']);
};
