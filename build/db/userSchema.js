"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _mongoose = _interopRequireDefault(require("mongoose"));

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

// User Schema
var UserSchema = _mongoose["default"].Schema({
  username: {
    type: String,
    index: true
  },
  password: {
    type: String
  },
  email: {
    type: String
  },
  name: {
    type: String
  }
});

var User = module.exports = _mongoose["default"].model('User', UserSchema);

module.exports.createUser = function (newUser, callback) {
  _bcryptjs["default"].genSalt(10, function (err, salt) {
    _bcryptjs["default"].hash(newUser.password, salt, function (err, hash) {
      newUser.password = hash;
      newUser.save(callback);
    });
  });
};
//# sourceMappingURL=userSchema.js.map