var express = require("express");
var router = express.Router();
var config = require("../config.js").insta;
var ig = require('instagram-node').instagram();
var Mailgun = require('mailgun').Mailgun;
var mg = new Mailgun('key-8d747dee2b8cc559d1e41d6aeb61372a');
ig.use({ client_id: config.client_id,
    client_secret: config.client_secret });
var math = require("math");

function roundNumber (value, decimals) {
    var p = Math.pow(10, decimals);
    return Math.round(value * p) / p;
}

/**
 * @api {get} /api/insta/show Show queried instagram posts.
 * @apiName ShowInstagram
 * @apiGroup Instagram
 *
 *@apiVersion 1.0.0
 *
 * @apiParam {Number} lat Latitude of Selected Location
 * @apiParam {Number} lng Longitude of Selected Location
 *
 * @apiSuccess {Array} result The JSON data returned from instagram.
 *
 */
router.get("/show", function(req, res) {
    logger.log("info","Instagram Show Request", {'Latitude':req.query.lat, "Longitude": req.query.lng});
    ig.location_search({ lat: roundNumber(req.query.lat, 19), lng: roundNumber(req.query.lng, 19) }, function(err, result, remaining, limit) {
        try {
            var id = result[0].id;
            ig.location_media_recent(id, function(err, result, pagination, remaining, limit) {
                res.json(result);
            });
        }
        catch (e) {
            logger.log("error","Instagram Show Request Failed", {'Latitude':req.query.lat, "Longitude": req.query.lng});
            res.send("Request Failed");
        }
    });

});


module.exports = router;