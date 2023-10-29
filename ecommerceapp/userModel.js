var mongoose = require('mongoose');

var schema = mongoose.Schema({
    username: String,
    email: String,
    mobile: String,
    password: String
});

let Post = module.exports = mongoose.model('users',schema);
