"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _staffController = _interopRequireDefault(require("../controllers/staffController"));

var router = (0, _express.Router)();
router.get('/', _staffController["default"].getListStaff);
router.get('/t', _staffController["default"].getTeachers);
router.post('/', _staffController["default"].AddNewStaff);
router.get('/:id', _staffController["default"].searchStaff);
router.put('/:id', _staffController["default"].updateStaff);
router["delete"]('/:id', _staffController["default"].deleteStaff);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=staffRoutes.js.map