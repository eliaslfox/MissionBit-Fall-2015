// dependencies
var express = require('express');
var path = require("path");

var app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use('/bower_components', express.static(path.join(__dirname, 'bower_components')));

app.get('/', function (req, res) {
    res.sendFile(__dirname +"/views/index.html");
});

module.exports = app;
