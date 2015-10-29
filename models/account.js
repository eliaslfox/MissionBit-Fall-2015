var mongoose = require('mongoose');
var accountSchema = mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true },
    password: String,
    otpUse: String,
    created: { type: Date, default: Date.now }
});
var account = mongoose.model('account', accountSchema);
module.exports = account;