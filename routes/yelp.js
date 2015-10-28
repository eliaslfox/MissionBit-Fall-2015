var express = require('express');
var router = express.Router();
var config = require("../config.js").yelp;
var Mailgun = require('mailgun').Mailgun;
var mg = new Mailgun('key-8d747dee2b8cc559d1e41d6aeb61372a');
var yelp = require("yelp").createClient({
    consumer_key: config.Consumer_Key,
    consumer_secret: config.Consumer_Secret,
    token: config.Token,
    token_secret: config.Token_Secret
});
var logger = require("../lib/logger.js");
/**
 * @api {get} /api/yelp/search Search businesses on yelp.
 * @apiName SearchYelp
 * @apiGroup Yelp
 *
 *
 * @apiVersion 1.0.0
 * @apiParam {String} term Search term.
 * @apiParam {Number} location Location information.
 *
 * @apiSuccess {Array} result The JSON data returned from yelp.
 *
 */
router.get("/search", function(req, res) {
    yelp.search({term: req.query.term, location: req.query.location, limit: 5}, function(error, data) {
        logger.log("info","Yelp Search Request", {'term':req.query.term, 'location':req.query.location});
        res.json(data);
    });
});

/**
 * @api {get} /api/yelp/search Get data on a business.
 * @apiName GetYelp
 * @apiGroup Yelp
 *
 * @apiVersion 1.0.0
 *
 * @apiParam {String} id The business' id.
 *
 * @apiSuccess {Array} result The JSON data returned from yelp.
 *
 */
router.get("/get", function(req, res) {
    yelp.business(req.query.id, function(error, data) {
        logger.log("info","Yelp Get Request", {'ID':req.query.id});
        res.json(data);
    });
});

module.exports = router;