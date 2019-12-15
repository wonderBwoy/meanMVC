const User = require('../models/user.model');

module.exports.createUser = function(req,res,next) {
    let newUser = new User({name: req.body.name, password: req.body.password});

    newUser.save( (err) => {
        res.status(200).json(({msg: 'Użytkownik dodany.'}));
    });
}

module.exports.getAllUsers = function(req,res,next) {
    User.find( (err,list) => {
        res.status(200).json(list);
    })
}

module.exports.searchUsers = function(req,res,next) {
    User.find( { name: req.query.name}, (err,list) => {
        let fullData = [];

        for (item of list) {
            fullData.push(item.namePassword);
        }

        res.status(200).json(fullData);
    })
}

module.exports.deleteUser = function(req,res,next) {
    User.deleteOne( { name: req.body.name }, (err) => {
        res.status(200).json({msg: 'User deleted'});
    })
}

module.exports.updateUser = function(req,res,next) {
    User.updateOne( { name: req.body.name, password: req.body.password }, { password: req.body.newPassword} , (err,no) => {
        console.log(no.modifiedCount);

        res.status(200).json({msg: 'User updated'});
    })
}