let mongoose = require('mongoose');
let passportLocalMongoose = require('passport-local-mongoose');

let userSchema = new mongoose.Schema({
    username: String,
    password: String
  });

userSchema.plugin(passportLocalMongoose);

userSchema.virtual('namePassword').get( function() {
    return this.username + ' ' + this.password;
})

module.exports = mongoose.model('User', userSchema)