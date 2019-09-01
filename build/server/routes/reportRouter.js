"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _viewController = _interopRequireDefault(require("../controllers/viewController"));

var router = (0, _express.Router)();
router.get('/', _viewController["default"].getMainView);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=reportRouter.js.map