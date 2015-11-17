var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
var comment = require("../models/comment.js");

router.post("/add", function(req, res) {
    var author = req.body.author;
    var text = req.body.text;
    var place = req.body.place;
    mongoose.connect('mongodb://localhost/getmefood');
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function () {
        var Comment = new comment(
            {
                author: author,
                text: text,
                place: place,
            });
        Comment.save(function(err) {
            if (err) {
                logger.log("error", err);
                mongoose.disconnect();
                res.send("ERROR");
            }
            mongoose.disconnect();
            res.send("Success");
        });
    });
});

router.post("/list", function(req, res) {
    var place = req.body.place;
    mongoose.connect('mongodb://localhost/getmefood');
    var db = mongoose.connection;
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function () {
        comment.find({place: place}, function (err, comments) {
            res.send(comments);
            console.log(comments);
            mongoose.disconnect();
        })
    });
});

module.exports = router;