const { AES } = require('crypto-js');

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const User = new Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  hashedPassword: {
    type: String,
    required: true
  },
  salt: {
    type: String,
    required: true
  },
  created: {
    type: Date,
    default: Date.now
  }
});

User.methods.encryptPassword = function (password) {
    return AES.encrypt(password, this.salt);
  };

User.methods.checkPassword = function (password) {
    return this.encryptPassword(password) === this.hashedPassword;
  };

User.virtual('password').set(function (password) {
      this._plainPassword = password;
      this.salt = Math.random().toString();
      this.hashedPassword = this.encryptPassword(password);
    })
    .get(function () {
      return this._plainPassword;
    });

module.exports = User;

