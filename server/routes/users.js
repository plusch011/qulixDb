const express = require('express');
const router = express.Router();

//init Database
const db = require('../db');


/* GET home page. */
router.get('/', function(req, res, next) {
  db.getUsers()
    .then(users => res.send(users))
    .catch(next);
});

module.exports = router;
