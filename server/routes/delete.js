const express = require('express');
const router = express.Router();

//init Database
const db = require('../db');

/* GET home page. */
router.post('/', function(req, res, next) {
  const username = req.body.username;
  if(!username) {
    res.sendStatus(400);
    return next(new Error('Bad Request'));
  }
  db.deleteUser(username)
    .then(() => res.send(username))
    .catch(next);
});

module.exports = router;
