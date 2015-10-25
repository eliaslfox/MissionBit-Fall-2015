var express = require('express');
var router = express.Router();
var config = require("../config.js").yelp;

var yelp = require("yelp").createClient({
    consumer_key: config.Consumer_Key,
    consumer_secret: config.Consumer_Secret,
    token: config.Token,
    token_secret: config.Token_Secret
});

router.get("/search", function(req, res) {
    yelp.search({term: req.query.term, location: req.query.location, limit: 5}, function(error, data) {
        res.json(data);
    });
});

router.get("/get", function(req, res) {
    yelp.business(req.query.id, function(error, data) {
        res.json(data);
    });
});

module.exports = router;