var express = require("express");
var router = express.Router();
var account = require("../models/account.js");
var logger = require("../lib/logger.js");
var mail = require("../lib/mail.js");
var user = require("../lib/user.js");

router.get("/add", function(req, res) {
    var username = req.query.username;
    var email = req.query.email;
    logger.log("info", "User Add", {email: email, username: username});
    user.add(username, email, function(password) {
        if (password == "ERROR") return;
        res.send("Api Call Complete");
        mail.sendBasic(email, "Your Get Me Food OTP", "Your otp is "+password);
    });
});

router.get("/login", function(req, res) {
    var username = req.query.username;
    var password = req.query.password;
    user.check(username, password, function(data) {
        logger.log("info", "User Check", {username: username, password: password, result: data});
        res.send(data);
    });
});

router.get("/gen", function(req, res) {
    var username = req.query.username;
    user.gen(username, function(data){
        var email = data[1];
        var password = data[0];
        res.send("Api Call Complete");
        mail.sendBasic(email, "Your Get Me Food OTP", "Your otp is "+password);
    });
});


module.exports = router;