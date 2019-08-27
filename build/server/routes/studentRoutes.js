"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _studentController = _interopRequireDefault(require("../controllers/studentController"));

var _express = require("express");

var router = (0, _express.Router)();
router.get('/', _studentController["default"].getAll);
router.post('/', _studentController["default"].adder);
router.get('/:id', _studentController["default"].getParticular);
router["delete"]('/:id', _studentController["default"].deleter);
router.put('/:id', _studentController["default"].updater);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=studentRoutes.js.map