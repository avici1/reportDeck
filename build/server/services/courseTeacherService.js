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

var _models = _interopRequireDefault(require("../../models"));

var courseTeacherService =
/*#__PURE__*/
function () {
  function courseTeacherService() {
    (0, _classCallCheck2["default"])(this, courseTeacherService);
  }

  (0, _createClass2["default"])(courseTeacherService, null, [{
    key: "addNew",
    value: function () {
      var _addNew = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(newEntry) {
        var added;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _models["default"].courseTeacher.create(newEntry);

              case 3:
                added = _context.sent;

                if (!(Object.values(added).length >= 1)) {
                  _context.next = 6;
                  break;
                }

                return _context.abrupt("return", added);

              case 6:
                return _context.abrupt("return", null);

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](0);
                throw _context.t0;

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 9]]);
      }));

      function addNew(_x) {
        return _addNew.apply(this, arguments);
      }

      return addNew;
    }()
  }, {
    key: "deleter",
    value: function () {
      var _deleter = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2(id) {
        var deleted;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _models["default"].courseTeacher.destroy({
                  where: {
                    classId: id
                  }
                });

              case 3:
                deleted = _context2.sent;

                if (!deleted) {
                  _context2.next = 6;
                  break;
                }

                return _context2.abrupt("return", deleted);

              case 6:
                return _context2.abrupt("return", null);

              case 9:
                _context2.prev = 9;
                _context2.t0 = _context2["catch"](0);
                throw _context2.t0;

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 9]]);
      }));

      function deleter(_x2) {
        return _deleter.apply(this, arguments);
      }

      return deleter;
    }()
  }, {
    key: "updater",
    value: function () {
      var _updater = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee3(id, updated_) {
        var updated;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return _models["default"].courseTeacher.update(updated_, {
                  where: {
                    classId: id
                  }
                });

              case 3:
                updated = _context3.sent;

                if (!updated) {
                  _context3.next = 6;
                  break;
                }

                return _context3.abrupt("return", updated);

              case 6:
                return _context3.abrupt("return", null);

              case 9:
                _context3.prev = 9;
                _context3.t0 = _context3["catch"](0);
                throw _context3.t0;

              case 12:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 9]]);
      }));

      function updater(_x3, _x4) {
        return _updater.apply(this, arguments);
      }

      return updater;
    }()
  }, {
    key: "getAll",
    value: function () {
      var _getAll = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee4() {
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return _models["default"].courseTeacher.findAll();

              case 3:
                return _context4.abrupt("return", _context4.sent);

              case 6:
                _context4.prev = 6;
                _context4.t0 = _context4["catch"](0);
                throw _context4.t0;

              case 9:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 6]]);
      }));

      function getAll() {
        return _getAll.apply(this, arguments);
      }

      return getAll;
    }()
  }, {
    key: "getOne_",
    value: function () {
      var _getOne_ = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee5(id) {
        var foundTerm;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return _models["default"].courseTeacher.findOne({
                  where: {
                    classId: id
                  }
                });

              case 3:
                foundTerm = _context5.sent;

                if (!(Object.values(foundTerm).length >= 1)) {
                  _context5.next = 6;
                  break;
                }

                return _context5.abrupt("return", foundTerm);

              case 6:
                return _context5.abrupt("return", null);

              case 9:
                _context5.prev = 9;
                _context5.t0 = _context5["catch"](0);
                throw _context5.t0;

              case 12:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[0, 9]]);
      }));

      function getOne_(_x5) {
        return _getOne_.apply(this, arguments);
      }

      return getOne_;
    }()
  }]);
  return courseTeacherService;
}();

var _default = courseTeacherService;
exports["default"] = _default;
//# sourceMappingURL=courseTeacherService.js.map