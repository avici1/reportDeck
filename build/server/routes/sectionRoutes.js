"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sectionController = _interopRequireDefault(require("../controllers/sectionController"));

var _express = require("express");

var router = (0, _express.Router)();
router.get('/', _sectionController["default"].getAll);
router.get('/sp', _sectionController["default"].get_specific_sections);
router.get('/:schoolId', _sectionController["default"].getOne);
router.post('/', _sectionController["default"].adder);
router.put('/:sectionId', _sectionController["default"].udpdate);
router["delete"]('/:sectionId', _sectionController["default"]["delete"]);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=sectionRoutes.js.map