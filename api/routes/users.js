var express = require('express');
var router = express.Router();
var users = require('../mocks/users');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(users);
});

router.get('/:id', function(req, res, next) {
  const id = req.params.id;
  console.log('id', id)
  res.json(users.find(user => user.id === Number(id)));
});

module.exports = router;
