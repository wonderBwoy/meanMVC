var express = require('express');
var passport = require('passport');
var router = express.Router();
var User = require('../models/user.model');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('index', {user: req.user} );
});

router.get('/register', (req,res) => {
  res.render('register', {});
})

router.get('/login', (req,res) => {
  res.render('login', { user: req.user });
})

router.post('/register', (req,res) => {
  User.register(new User({ username: req.body.username }), req.body.password, (err,user) => {
    if (err) {
      return res.render('register', { user: user} );
    }

    passport.authenticate('local')(req,res, () => {
      res.redirect('/');
    })
  })
})

router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) { return res.redirect('/'); }
    if (!user) { return res.render('login', { msg: 'Invalid username or password.'}); }

    req.login(user, (err) => {
      if (err) { return next(err); }
      return res.redirect('/');
    });
  
  })(req,res,next);
});

router.get('/logout', (req,res) => {
  req.logout();
  res.redirect('/');
})

// router.post('/create', userController.createUser);

// router.get('/list', userController.getAllUsers);

// router.get('/search', userController.searchUsers);

// router.delete('/delete', userController.deleteUser);

// router.post('/update', userController.updateUser);


module.exports = router;
