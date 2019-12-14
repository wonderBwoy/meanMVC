var express = require('express');
var router = express.Router();
var UserController = require('../controllers/users.controller');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/create', UserController.createUser);

module.exports = router;
