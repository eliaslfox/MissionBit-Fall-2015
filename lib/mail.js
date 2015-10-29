var Mailgun = require('mailgun').Mailgun;
var config = require("../config.js").mailgun;
var mg = new Mailgun(config.key);

module.exports = {
    sendBasic: function(to, subject, text) {
        mg.sendText('accounts@getmefood.xyz',
            to,
            subject,
            text,
            {'X-Campaign-Id': 'something'},
            function(err) { err && console.log(err) });
    }
};
