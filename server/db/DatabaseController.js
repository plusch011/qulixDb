const User = require('../models/User');
const debug = require('debug')('server:DATABASE');
const mongoose = require('mongoose');
// const config = require('../../config').getConfig('db');

class DatabaseController {
  constructor(URI, options) {
    this.URI = URI;
    this.options = options;
  }

  async connect() {
    if(this.options) {
      return mongoose.connect(this.URI, this.options);
    }
    return mongoose.connect(this.URI);
  }

  async dropDatabase() {
    return mongoose.connection.dropDatabase();
  }

  async find(obj) {
    await this.connect()
    await this.initModel()
    return mongoose.models.User.find(obj);
  }

  async initModel() {
    mongoose.model('User', User);
  }

  async createUser(user) {
    const usr = new mongoose.models.User({username: user.name, password: user.password});
    debug('user created');
    return usr.save();
  }

  async createUsers(users) {

  }

  async close() {
    debug('closed');
    return mongoose.disconnect();
  }
}

// const ctrl = new DatabaseController(config.URI, config.options);
//
// ctrl.connect()
//   .then(() => {
//     debug('connected');
//     return ctrl.initModel();
//   })
//   .then(() => {
//     debug('created models');
//     return ctrl.dropDatabase();
//   })
//   .then(() => {
//     debug('cleared db');
//     return ctrl.createUser({name: 'user', password: 'password'});
//   })
//   .then(() => mongoose.models.User.find())
//   .then(users => debug(users))
//   .then(() => ctrl.close())
//   .catch(err => debug(err));

module.exports = (URI, options) => new DatabaseController(URI, options);


