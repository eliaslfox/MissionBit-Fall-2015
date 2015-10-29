var express = require("express");
var router = express.Router();
var yelpRoute = require("./yelp.js");
var instaRoute = require('./insta.js');
var userRoute = require("./user.js");

router.use("/yelp", yelpRoute);
router.use("/insta", instaRoute);
router.use("/user", userRoute);

module.exports = router;