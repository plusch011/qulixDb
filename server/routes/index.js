var express = require('express');
var router = express.Router();
const config = require('../../config').getConfig('db');
const mongoose = require('mongoose');

/* GET home page. */
router.get('/', function(req, res, next) {
  db.find()
    .then(users => res.send(users))
    .catch(next);
});

module.exports = router;
