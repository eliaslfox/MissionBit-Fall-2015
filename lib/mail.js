var Mailgun = require('mailgun').Mailgun;
var mg = new Mailgun('key-8d747dee2b8cc559d1e41d6aeb61372a');

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
