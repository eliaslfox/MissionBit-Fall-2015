var express = require("express");
var router = express.Router();
var yelpRoute = require("./yelp.js");
var instaRoute = require('./insta.js');
var userRoute = require("./user.js");
var commentRoute = require("./comments.js");

router.use("/yelp", yelpRoute);
router.use("/insta", instaRoute);
router.use("/user", userRoute);
router.use("/comments", commentRoute);

module.exports = router;