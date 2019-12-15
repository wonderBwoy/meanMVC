let mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
    name: String,
    password: String
  });

// user.method.deletePost = function(){
//     console.log('Post deleted')
// };

// user.method.deleteComment = function(){
//     console.log('Comment deleted')
// }

userSchema.virtual('namePassword').get( function() {
    return this.name + ' ' + this.password;
})

module.exports = mongoose.model('User', userSchema)