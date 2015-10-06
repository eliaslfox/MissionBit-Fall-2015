var express = require('express');
var passport = require('passport');
var Account = require('../../models/account');
var router = express.Router();

router.get('/', function (req, res) {
    res.render('passport/index', { user : req.user });
});

router.get('/register', function(req, res) {
    res.render('passport/register', { });
});


/**
* @api {post} /passport/register Register
* @apiName Register
* @apiGroup Passport
*
* @apiVersion 0.1.0
*
*@apiParam {String} username Mandatory username of the new user.
*@apiParam {String} password Mandatory password of the new user.
*
*
* @apiSuccessExample Success-Response:
*     HTTP/1.1 200 OK
*/
router.post('/register', function(req, res) {
    Account.register(new Account({ username : req.body.username }), req.body.password, function(err, account) {
        if (err) {
            return res.render('passport/register', { account : account });
        }

        passport.authenticate('local')(req, res, function () {
            res.redirect('/');
        });
    });
});

router.get('/login', function(req, res) {
    res.render('passport/login', { user : req.user });
});

/**
* @api {post} /passport/login Login
* @apiName Login
* @apiGroup Passport
*
* @apiVersion 0.1.0
*
*@apiParam {String} username Mandatory username of the user.
*@apiParam {String} password Mandatory password of the user.
*
*
* @apiSuccessExample Success-Response:
*     HTTP/1.1 200 OK
*/
router.post('/login', passport.authenticate('local'), function(req, res) {
    res.redirect('/');
});

router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});

module.exports = router;
