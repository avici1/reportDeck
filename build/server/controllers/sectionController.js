"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _sectionServices = _interopRequireDefault(require("../services/sectionServices"));

var _Util = _interopRequireDefault(require("../utils/Util"));

var util = new _Util["default"]();

var sectionsController =
/*#__PURE__*/
function () {
  function sectionsController() {
    (0, _classCallCheck2["default"])(this, sectionsController);
  }

  (0, _createClass2["default"])(sectionsController, null, [{
    key: "getOne",
    value: function () {
      var _getOne = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(req, res) {
        var id, one;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                id = req.params;
                _context.next = 4;
                return _sectionServices["default"].getOne(id);

              case 4:
                one = _context.sent;

                if (!(Object.values(one).length == 1)) {
                  _context.next = 10;
                  break;
                }

                util.setSuccess("Found", 200, one);
                return _context.abrupt("return", util.send(res));

              case 10:
                util.setError(400, "A problem occured");
                return _context.abrupt("return", util.send(res));

              case 12:
                _context.next = 18;
                break;

              case 14:
                _context.prev = 14;
                _context.t0 = _context["catch"](0);
                util.setError(400, "A problem occured");
                return _context.abrupt("return", util.send(res));

              case 18:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 14]]);
      }));

      function getOne(_x, _x2) {
        return _getOne.apply(this, arguments);
      }

      return getOne;
    }()
  }, {
    key: "getAll",
    value: function () {
      var _getAll = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2(req, res) {
        var list;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _sectionServices["default"].getAll();

              case 3:
                list = _context2.sent;

                if (!(Object.values(list).length >= 1)) {
                  _context2.next = 9;
                  break;
                }

                util.setSuccess("Found ", 200, list);
                return _context2.abrupt("return", util.send(res));

              case 9:
                util.setError(400, "A problem occured can't find list of Sections");
                return _context2.abrupt("return", util.send(res));

              case 11:
                _context2.next = 17;
                break;

              case 13:
                _context2.prev = 13;
                _context2.t0 = _context2["catch"](0);
                util.setError(400, "an error occured " + _context2.t0.message);
                return _context2.abrupt("return", util.send(res));

              case 17:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 13]]);
      }));

      function getAll(_x3, _x4) {
        return _getAll.apply(this, arguments);
      }

      return getAll;
    }()
  }, {
    key: "get_specific_sections",
    value: function () {
      var _get_specific_sections = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee3(req, res) {
        var sections;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return _sectionServices["default"].get_defined_sections();

              case 3:
                sections = _context3.sent;

                if (!(Object.values(sections).length >= 1)) {
                  _context3.next = 9;
                  break;
                }

                util.setSuccess(" Found sections", 200, sections);
                return _context3.abrupt("return", util.send(res));

              case 9:
                util.setError(" Sections weren't found at all ");
                return _context3.abrupt("return", util.send(res));

              case 11:
                _context3.next = 17;
                break;

              case 13:
                _context3.prev = 13;
                _context3.t0 = _context3["catch"](0);
                util.setError(400, "an error occured  ".concat(_context3.t0.message));
                return _context3.abrupt("return", util.send(res));

              case 17:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 13]]);
      }));

      function get_specific_sections(_x5, _x6) {
        return _get_specific_sections.apply(this, arguments);
      }

      return get_specific_sections;
    }()
  }, {
    key: "adder",
    value: function () {
      var _adder = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee4(req, res) {
        var data, added;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                data = req.body;

                if (!(Object.values(data).length < 3 == false)) {
                  _context4.next = 10;
                  break;
                }

                _context4.next = 5;
                return _sectionServices["default"].addNew(data);

              case 5:
                added = _context4.sent;
                util.setSuccess("Added successfully", 200, added);
                return _context4.abrupt("return", util.send(res));

              case 10:
                util.setError(400, "can't add some missing fields");
                return _context4.abrupt("return", util.send(res));

              case 12:
                _context4.next = 18;
                break;

              case 14:
                _context4.prev = 14;
                _context4.t0 = _context4["catch"](0);
                util.setError(400, "an error occured " + _context4.t0.message);
                return _context4.abrupt("return", util.send(res));

              case 18:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 14]]);
      }));

      function adder(_x7, _x8) {
        return _adder.apply(this, arguments);
      }

      return adder;
    }()
  }, {
    key: "udpdate",
    value: function () {
      var _udpdate = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee5(req, res) {
        var id, data, updated;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                id = req.params;
                data = req.body;

                if (!(Object.values(data).length >= 1)) {
                  _context5.next = 11;
                  break;
                }

                _context5.next = 6;
                return _sectionServices["default"].updater(id, data);

              case 6:
                updated = _context5.sent;
                util.setSuccess("Updated successfully", 200, updated);
                return _context5.abrupt("return", util.send(res));

              case 11:
                util.setError(400, "C'mon you got to atleast update one");
                return _context5.abrupt("return", util.send(res));

              case 13:
                _context5.next = 19;
                break;

              case 15:
                _context5.prev = 15;
                _context5.t0 = _context5["catch"](0);
                util.setError(400, "An error occured " + _context5.t0.message);
                return _context5.abrupt("return", util.send(res));

              case 19:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[0, 15]]);
      }));

      function udpdate(_x9, _x10) {
        return _udpdate.apply(this, arguments);
      }

      return udpdate;
    }()
  }, {
    key: "delete",
    value: function () {
      var _delete2 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee6(req, res) {
        var id, deleted;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.prev = 0;
                id = req.params;
                _context6.next = 4;
                return _sectionServices["default"].deleter(id);

              case 4:
                deleted = _context6.sent;

                if (!deleted) {
                  _context6.next = 8;
                  break;
                }

                util.setSuccess("Deleted successfully", 200, deleted);
                return _context6.abrupt("return", util.send(res));

              case 8:
                _context6.next = 14;
                break;

              case 10:
                _context6.prev = 10;
                _context6.t0 = _context6["catch"](0);
                util.setError(400, "An error occured " + _context6.t0.message);
                return _context6.abrupt("return", util.send(res));

              case 14:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, null, [[0, 10]]);
      }));

      function _delete(_x11, _x12) {
        return _delete2.apply(this, arguments);
      }

      return _delete;
    }()
  }]);
  return sectionsController;
}();

var _default = sectionsController;
exports["default"] = _default;
//# sourceMappingURL=sectionController.js.map