/**
* @fileOverview Main app file.
* @author Elias Lawson-Fox
* @version 0.1.0
*/

var express = require('express');
var app = express();

/** @namespace */
app.get('/', function (req, res) {
    /**
     * Repeat <tt>str</tt> several times.
     * @param {string} str The string to repeat.
     * @param {number} [times=1] How many times to repeat the string.
     * @returns {string}
     */
    req.usedGet = true;
    res.send('Hello World!');
});

module.exports = app;
