const DatabaseApi = require('./DatabaseApi');
const DatabaseController = require('./DatabaseController');
const config = require('../../config').getConfig('db');

module.exports = new DatabaseController(DatabaseApi, config.URI, config.options);