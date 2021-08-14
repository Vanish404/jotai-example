var express = require('express');
var router = express.Router();
var users = require('../mocks/users');
var posts = [];

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(users);
  next()
});

router.get('/:id', function(req, res) {
  const id = req.params.id;
  res.json(users.find(user => user.id === Number(id)));
});

router.post('/:id/posts', function(req, res, next) {
  const body = req.body;
  const id = req.params.id;
  const generateID = posts.length + 1;
  if (!id) {
    const error = new Error('user id is undefined');
    error.status = 404;
    return next(error);
  }
  const userPost = {
    id: generateID,
    userId: id,
    description: 'some description',
  }
  res.json(userPost);
});

router.post('/', function(req, res, next) {
  const body = req.body;
  const generateId = users.length + 1;
  users.push({
    ...body,
    id: generateId
  })
  res.json(users.find(user => user.id === generateId));
});

module.exports = router;
