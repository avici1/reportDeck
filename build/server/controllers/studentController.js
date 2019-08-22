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

var _studentServices = _interopRequireDefault(require("../services/studentServices"));

var _Util = _interopRequireDefault(require("../utils/Util"));

var util = new _Util["default"]();

var studentController =
/*#__PURE__*/
function () {
  function studentController() {
    (0, _classCallCheck2["default"])(this, studentController);
  }

  (0, _createClass2["default"])(studentController, null, [{
    key: "getAll",
    value: function () {
      var _getAll = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(req, res) {
        var all;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _studentServices["default"].getAllStudent();

              case 3:
                all = _context.sent;

                if (all) {
                  _context.next = 9;
                  break;
                }

                util.setError(400, "Students can't be found");
                return _context.abrupt("return", util.send(res));

              case 9:
                util.setSuccess("Students found successfully", 200, all);
                return _context.abrupt("return", util.send(res));

              case 11:
                _context.next = 17;
                break;

              case 13:
                _context.prev = 13;
                _context.t0 = _context["catch"](0);
                util.setError(400, _context.t0.message + ' controller');
                return _context.abrupt("return", util.send(res));

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 13]]);
      }));

      function getAll(_x, _x2) {
        return _getAll.apply(this, arguments);
      }

      return getAll;
    }()
  }, {
    key: "getParticular",
    value: function () {
      var _getParticular = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2(req, res) {
        var id, one;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                id = req.params;
                _context2.next = 4;
                return _studentServices["default"].getOneStudent(id);

              case 4:
                one = _context2.sent;

                if (one) {
                  _context2.next = 10;
                  break;
                }

                util.setError(400, "Student can't be found");
                return _context2.abrupt("return", util.send(res));

              case 10:
                util.setSuccess("Student found", 200, one);
                return _context2.abrupt("return", util.send(res));

              case 12:
                _context2.next = 18;
                break;

              case 14:
                _context2.prev = 14;
                _context2.t0 = _context2["catch"](0);
                util.setError(400, _context2.t0.message);
                return _context2.abrupt("return", util.send(res));

              case 18:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 14]]);
      }));

      function getParticular(_x3, _x4) {
        return _getParticular.apply(this, arguments);
      }

      return getParticular;
    }()
  }, {
    key: "deleter",
    value: function () {
      var _deleter = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee3(req, res) {
        var id, deleted;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                id = req.params;
                _context3.next = 4;
                return _studentServices["default"].deleteStudent(id);

              case 4:
                deleted = _context3.sent;

                if (deleted) {
                  _context3.next = 10;
                  break;
                }

                util.setError(400, "Student can't be found");
                return _context3.abrupt("return", util.send(res));

              case 10:
                util.setSuccess("Deleted successfully", 200, deleted);
                return _context3.abrupt("return", util.send(res));

              case 12:
                _context3.next = 18;
                break;

              case 14:
                _context3.prev = 14;
                _context3.t0 = _context3["catch"](0);
                util.setError(400, _context3.t0.message);
                return _context3.abrupt("return", util.send(res));

              case 18:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 14]]);
      }));

      function deleter(_x5, _x6) {
        return _deleter.apply(this, arguments);
      }

      return deleter;
    }()
  }, {
    key: "adder",
    value: function () {
      var _adder = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee4(req, res) {
        var addee, added;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                addee = req.body;
                _context4.next = 4;
                return _studentServices["default"].addStudent(addee);

              case 4:
                added = _context4.sent;

                if (added) {
                  _context4.next = 10;
                  break;
                }

                util.setError(400, "Student can't be added");
                return _context4.abrupt("return", util.send(res));

              case 10:
                util.setSuccess("Added successfully", 200, added);
                return _context4.abrupt("return", util.send(res));

              case 12:
                _context4.next = 18;
                break;

              case 14:
                _context4.prev = 14;
                _context4.t0 = _context4["catch"](0);
                util.setError(400, _context4.t0.message);
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
    key: "updater",
    value: function () {
      var _updater = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee5(req, res) {
        var id, updated, updated_class;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                id = req.params.id;
                updated = req.body;
                _context5.prev = 2;

                if (!(Object.values(updated).length >= 1 == false)) {
                  _context5.next = 8;
                  break;
                }

                util.setError(404, "sent empty fields");
                return _context5.abrupt("return", util.send(res));

              case 8:
                _context5.next = 10;
                return _studentServices["default"].UpdateStudent(id, updated);

              case 10:
                updated_class = _context5.sent;

                if (updated_class) {
                  _context5.next = 16;
                  break;
                }

                util.setError(404, "cant update a class");
                return _context5.abrupt("return", util.send(res));

              case 16:
                util.setSuccess('Classes updated successfully', 200, updated_class);
                return _context5.abrupt("return", util.send(res));

              case 18:
                _context5.next = 24;
                break;

              case 20:
                _context5.prev = 20;
                _context5.t0 = _context5["catch"](2);
                util.setError(404, 'Oops something Went wrong cant update the book >> ' + _context5.t0.message);
                return _context5.abrupt("return", util.send(res));

              case 24:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[2, 20]]);
      }));

      function updater(_x9, _x10) {
        return _updater.apply(this, arguments);
      }

      return updater;
    }()
  }]);
  return studentController;
}();

var _default = studentController;
exports["default"] = _default;
//# sourceMappingURL=studentController.js.map