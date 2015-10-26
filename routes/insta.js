var express = require("express");
var router = express.Router();
var config = require("../config.js").insta;
var ig = require('instagram-node').instagram();
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
 * @apiParam {Number} lat Latitude of Selected Location
 * @apiParam {Number} lng Longitude of Selected Location
 *
 * @apiSuccess {Array} result The JSON data returned from instagram.
 *
 */
router.get("/show", function(req, res) {
    ig.location_search({ lat: roundNumber(req.query.lat, 19), lng: roundNumber(req.query.lng, 19) }, function(err, result, remaining, limit) {
        var id = result[0].id;
        ig.location_media_recent(id, function(err, result, pagination, remaining, limit) {
            res.json(result);
        });
    });
});


module.exports = router;