"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _userController = _interopRequireDefault(require("../controllers/userController"));

var _express = require("express");

var router = new _express.Router();
router.post('/', _userController["default"].createUser);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=userRoutes.js.map