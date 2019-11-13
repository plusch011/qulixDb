const mongoose = require('mongoose');
const config = require('../../config').getConfig('db');
const debug = require('debug')('server:database');

mongoose.connect(config.URI, config.options);

module.exports = mongoose;