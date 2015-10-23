var express = require("express");
var router = express.Router();
var yelpRoute = require("./yelp.js");

router.use("/yelp", yelpRoute);

module.exports = router;