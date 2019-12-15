var express = require('express');
var router = express.Router();
const userController = require('../controllers/users.controller');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/create', userController.createUser);

router.get('/list', userController.getAllUsers);

router.get('/search', userController.searchUsers);

router.delete('/delete', userController.deleteUser);

router.post('/update', userController.updateUser);


module.exports = router;
