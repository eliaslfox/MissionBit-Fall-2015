var express = require('express');
var app = express();

app.get('/', function (req, res) {
    req.usedGet = true;
    res.send('Hello World!');
});

module.exports = app;
