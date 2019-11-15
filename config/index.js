const cfgManager = require('node-config-manager');
const path = require('path');

cfgManager.init({
  configDir: __dirname
});

cfgManager.addConfig('server');
cfgManager.addConfig('client');
cfgManager.addConfig('db');

module.exports = cfgManager;