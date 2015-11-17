var mongoose = require('mongoose');
var commentSchema = mongoose.Schema({
    author: {type: String, index: {unique: false}},
    text: String,
    created: { type: Date, default: Date.now },
    place: String
});
var comment = mongoose.model('comment', commentSchema);
module.exports = comment;