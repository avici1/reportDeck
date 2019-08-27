"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _termController = _interopRequireDefault(require("../controllers/termController"));

// import router from './classRouter';
var route = (0, _express.Router)();
route.get('/', _termController["default"].getAll);
route.get('/:id/:term/:course', _termController["default"].getParticulars);
route.put('/:id', _termController["default"].updateTerm);
route["delete"]('/:id', _termController["default"].deleteTerm);
route.post('/', _termController["default"].addNewRecord);
var _default = route;
exports["default"] = _default;
//# sourceMappingURL=termRoutes.js.map