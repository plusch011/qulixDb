const express = require('express');
const router = express.Router();

//init Database
const db = require('../db');

/* GET home page. */
router.post('/', function(req, res, next) {
  const username = req.body.username;
  const password = req.body.password;
  if(!username || !password) {
    res.sendStatus(400);
    return next(new Error('Bad Request'));
  }
  db.createUser(username, password)
    .then(user => res.send(user))
    .catch(next);
});

module.exports = router;



