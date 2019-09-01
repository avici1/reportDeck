"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _decisionController = _interopRequireDefault(require("../controllers/decisionController"));

var _express = require("express");

var router = (0, _express.Router)();
router.get('/', _decisionController["default"].getAll);
router.get('/:id', _decisionController["default"].getOne);
router.post('/', _decisionController["default"].adder);
router.put('/:decisionId', _decisionController["default"].udpdate);
router["delete"]('/:decisionId', _decisionController["default"]["delete"]);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=decisionRoutes.js.map