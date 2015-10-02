var express = require('express');
var app = express();

/**
 * @api {get} / Ping the server
 * @apiName Basic Ping
 * @apiGroup Ping
 *
* @apiVersion 0.1.0
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *      Hello, World!
 */
app.get('/', function (req, res) {
    res.send('Hello World!');
});

module.exports = app;
