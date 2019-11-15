const User = require('../models/User');
const debug = require('debug')('server:DATABASE');
const mongoose = require('mongoose');
// const config = require('../../config').getConfig('db');

class DatabaseAPI {
  constructor(URI, options) {
    this.URI = URI;
    this.options = options;
    this.db = mongoose;
  }

  async connect() {
    await this.db.connect(this.URI, this.options || null);
    debug('connection open');
    return this.db;
  }

  async dropDatabase() {
    return this.db.connection.dropDatabase();
  }

  async find(obj) {
    debug(`find request: `, obj || {});
    return this.db.models.User.find(obj || {});
  }

  async initModel() {
    this.db.model('User', User);
  }

  async createUser(username, password) {
    const usr = new this.db.models.User({ username, password });
    debug(`user created: ${username}`);
    return usr.save();
  }

  async deleteUser(username) {
    await this.db.models.User.deleteOne({ username });
    debug('deleted user', username);
    return true;
  }

  async close() {
    debug('connection close');
    return this.db.disconnect();
  }
}

module.exports = DatabaseAPI;


