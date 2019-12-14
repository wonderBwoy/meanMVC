let mongoose = require('mongoose')
let passportLocalMongoose = require('passport-local-mongoose');

let user = new mongoose.Schema({
    username: String,
    password: String
  });

user.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', user)


