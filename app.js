var express = require('express');
var app = express();

var yelpRoute = require("./routes/yelp");

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.use("/yelp", yelpRoute);

module.exports = app;
