"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _schoolParameterController = _interopRequireDefault(require("../controllers/schoolParameterController"));

var route = (0, _express.Router)();
route.get('/', _schoolParameterController["default"].getAll);
route.put('/:id', _schoolParameterController["default"].updateSchool);
route.post('/', _schoolParameterController["default"].addNew);
var _default = route;
exports["default"] = _default;
//# sourceMappingURL=studentParameterRouter.js.map