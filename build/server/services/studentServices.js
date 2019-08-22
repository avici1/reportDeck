"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _models = _interopRequireDefault(require("../../models"));

var _sequelize = _interopRequireDefault(require("sequelize"));

// import Util from 'Util';
var op = _sequelize["default"].Op;

var studentServices =
/*#__PURE__*/
function () {
  function studentServices() {
    (0, _classCallCheck2["default"])(this, studentServices);
  }

  (0, _createClass2["default"])(studentServices, null, [{
    key: "getAllStudent",
    value: function () {
      var _getAllStudent = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee() {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _models["default"].Students.findAll();

              case 3:
                return _context.abrupt("return", _context.sent);

              case 6:
                _context.prev = 6;
                _context.t0 = _context["catch"](0);
                throw _context.t0;

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 6]]);
      }));

      function getAllStudent() {
        return _getAllStudent.apply(this, arguments);
      }

      return getAllStudent;
    }()
  }, {
    key: "getOneStudent",
    value: function () {
      var _getOneStudent = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2(searchParam) {
        var foundStudent;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _models["default"].Students.findAll({
                  where: (0, _defineProperty2["default"])({}, op.or, [{
                    matricule: (0, _defineProperty2["default"])({}, op.like, '%' + searchParam + '%')
                  }, {
                    names: (0, _defineProperty2["default"])({}, op.like, '%' + searchParam + '%')
                  }])
                });

              case 3:
                foundStudent = _context2.sent;

                if (!foundStudent) {
                  _context2.next = 6;
                  break;
                }

                return _context2.abrupt("return", foundStudent);

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

      function getOneStudent(_x) {
        return _getOneStudent.apply(this, arguments);
      }

      return getOneStudent;
    }()
  }, {
    key: "UpdateStudent",
    value: function () {
      var _UpdateStudent = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee3(id, Updated) {
        var updateStudent;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return _models["default"].Students.update(Updated, {
                  where: {
                    matricule: id
                  }
                });

              case 3:
                updateStudent = _context3.sent;

                if (!updateStudent) {
                  _context3.next = 6;
                  break;
                }

                return _context3.abrupt("return", updateStudent);

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

      function UpdateStudent(_x2, _x3) {
        return _UpdateStudent.apply(this, arguments);
      }

      return UpdateStudent;
    }()
  }, {
    key: "deleteStudent",
    value: function () {
      var _deleteStudent = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee4(id) {
        var deletedStudent;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return _models["default"].Students.destroy({
                  where: {
                    matricule: id
                  }
                });

              case 3:
                deletedStudent = _context4.sent;

                if (!deletedStudent) {
                  _context4.next = 6;
                  break;
                }

                return _context4.abrupt("return", deletedStudent);

              case 6:
                return _context4.abrupt("return", null);

              case 9:
                _context4.prev = 9;
                _context4.t0 = _context4["catch"](0);
                throw _context4.t0;

              case 12:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 9]]);
      }));

      function deleteStudent(_x4) {
        return _deleteStudent.apply(this, arguments);
      }

      return deleteStudent;
    }()
  }, {
    key: "addStudent",
    value: function () {
      var _addStudent = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee5(newStudent) {
        var added;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return _models["default"].Students.create(newStudent);

              case 3:
                added = _context5.sent;

                if (!added) {
                  _context5.next = 6;
                  break;
                }

                return _context5.abrupt("return", added);

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

      function addStudent(_x5) {
        return _addStudent.apply(this, arguments);
      }

      return addStudent;
    }()
  }]);
  return studentServices;
}();

var _default = studentServices;
exports["default"] = _default;
//# sourceMappingURL=studentServices.js.map