"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _courseTeacherController = _interopRequireDefault(require("../controllers/courseTeacherController"));

var _express = require("express");

var router = (0, _express.Router)();
router.get('/', _courseTeacherController["default"].getAll);
router.get('/:id', _courseTeacherController["default"].getOne);
router.post('/', _courseTeacherController["default"].adder);
router["delete"]('/:id', _courseTeacherController["default"]["delete"]);
router.put('/:id', _courseTeacherController["default"].udpdate);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=courseTeacherRoutes.js.map