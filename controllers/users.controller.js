const User = require('../models/user.model');

module.exports.createUser = function(req, res) {
    let user = new User({name: req.body.name, password: req.body.password});
    user.save((err) => {
        res.sendStatus(200).json({msg: 'uzytkownik dodany'})
    });
}