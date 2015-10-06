var path = require('path');

module.exports = function(grunt){
    "use strict";
    grunt.initConfig({
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
        simplemocha: {
            options: {
                globals: ['should', 'Promise'],
                timeout: 3000,
                ignoreLeaks: false,
                ui: 'bdd',
                node: true,
            },
            all: { src: ['test/**/*.js'] }
        },

        jshint: {
            options: {
                reporter: require('jshint-stylish'),
                globals: {
                    //node
                    require: true,
                    module: true,
                    //mocha
                    describe: true,
                    it: true,
                    //hooks (used by mocha)
                    beforeEach: true,
                    afterEach: true,
                },
            },
            all: {
                src: [
                    './*.js',
                    'test/**/*.js',
                    'routes/**/*.js',
                ]
            },
        },
        apidoc: {
            mypp: {
                src: ".",
                dest: "apidoc/",
                options: {
                    includeFilters: [ ".*\\.js$" ],
                    excludeFilters: [ "node_modules/" ]
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-express');
    grunt.loadNpmTasks('grunt-open');
    grunt.loadNpmTasks('grunt-simple-mocha');
    grunt.loadNpmTasks('grunt-jslint');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-apidoc');

    grunt.registerTask('default', ['express', 'open', 'express-keepalive']);
    grunt.registerTask('test', 'simplemocha');
    grunt.registerTask('lint', 'jshint');
    grunt.registerTask('deploy', ['lint','test','apidoc']);
};
