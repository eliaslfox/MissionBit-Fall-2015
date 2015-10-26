var express = require("express");
var router = express.Router();
var yelpRoute = require("./yelp.js");
var instaRoute = require('./insta.js');

router.use("/yelp", yelpRoute);
router.use("/insta", instaRoute);

module.exports = router;