var express = require('express');
var router = express.Router();

var config = require("../../config.js").yelp;

var yelp = require("yelp").createClient({
  consumer_key: config.consumer_key,
  consumer_secret: config.consumer_secret,
  token: config.token,
  token_secret: config.token_secret
});

router.get('/', function(req, res) {
  res.send('Yelp api home page');
});

/**
* @api {get} /yelp/search Search
* @apiName Yelp Search
* @apiGroup Yelp
*
* @apiVersion 0.1.0
*
*@apiParam {String} term Optional search term for locations.
*@apiParam {String} location Mandatory Location term for where to search.
*
* @apiSuccess {Json} region Information about the searched area.
* @apiSuccess {Intiger} total The total number of businesses which match the query.
* @apiSuccess {Json} buisnesses An array containing json data about each buisness.
*
* @apiSuccessExample Success-Response:
*     HTTP/1.1 200 OK
*      {
*       "region": {
*           "span": {
*               "latitude_delta": 0.0,
*               "longitude_delta": 0.0
*           },
*           "center": {
*               "latitude": 37.7595713,
*               "longitude": -122.4040164
*           }
*       },
*       "total": 52088,
*       "businesses": []
*      }
*/
router.get('/search', function(req, res) {
    yelp.search( {term: req.query.term, location: req.query.location}, function(error, data) {
        if (error) {
            console.log(error);
            res.send(error);
            return;
        }
        res.json(data);
    });
});

module.exports = router;
