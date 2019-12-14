const User = require('../models/user.model');

module.exports.createUser = function(req, res) {
    let user = new User({name: req.body.name, password: req.body.password});
    user.save((err) => {
        res.status(200).json({msg: 'uzytkownik dodany'})
    });
}


module.exports.getAllUsers = function(req,res,next) {
    User.find( (err,list) => {
        res.status(200).json(list);
    })
}

module.exports.searchUsers = function(req,res,next) {
    User.find( { name: req.query.name}, (err,list) => {
        res.status(200).json(list);
    })
}

module.exports.deleteUser = function(req,res,next) {
    User.deleteOne( { name: req.body.name }, (err) => {
        res.status(200).json({msg: 'User deleted'});
    })
}