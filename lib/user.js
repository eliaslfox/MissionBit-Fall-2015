var mongoose = require("mongoose");
var account = require("../models/account.js");

module.exports = {
    add: function(username, email, callback) {
        var password = "XYZ-"+Date.now();
        mongoose.connect('mongodb://localhost/getmefood');
        var db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection error:'));
        db.once('open', function () {
            var Account = new account(
                {
                    email: email,
                    password: password,
                    otpUse: Date.now()+(30*60000),
                    username: username
                });
            Account.save(function(err) {
                if (err) {
                    logger.log("error", err);
                    mongoose.disconnect();
                    return callback("ERROR");
                }
                mongoose.disconnect();
                return callback(password);
            });
        });
    },
    check: function(username, password, callback) {
        mongoose.connect('mongodb://localhost/getmefood');
        var db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection error:'));
        db.once('open', function() {
           account.findOne({username: username}, function(err, account) {
              if (account.otpUse > Date.now()) {
                  if (account.password == password) {
                      callback("Success");
                      mongoose.disconnect();
                  } else {
                      callback("Failure");
                      mongoose.disconnect()
                  }
              } else {
                  callback("Expired OTP");
                  mongoose.disconnect()
              }
           });
        });
    },
    gen: function(username, callback) {
        mongoose.connect('mongodb://localhost/getmefood');
        var db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection error:'));
        db.once("open", function() {
           account.findOne({username: username}, function(err, account) {
               account.password = "XYZ-"+Date.now();
               account.otpUse = Date.now()+(30*60000);
               account.save();
               callback([account.password, account.email]);
               mongoose.disconnect();
           });
        });
    }
};