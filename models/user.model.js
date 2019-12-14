let mongoose = require('mongoose')

let user = new mongoose.Schema({
    name: String,
    password: String
  });

user.method.deletePost = function(){
    console.log('Post deleted')
};

user.method.deleteComment = function(){
    console.log('Comment deleted')
}

module.exports = mongoose.model('User', user)