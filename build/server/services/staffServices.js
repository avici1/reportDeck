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

var op = _sequelize["default"].Op;

var staffService =
/*#__PURE__*/
function () {
  function staffService() {
    (0, _classCallCheck2["default"])(this, staffService);
  }

  (0, _createClass2["default"])(staffService, null, [{
    key: "GetAllStaff",
    value: function () {
      var _GetAllStaff = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee() {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _models["default"].Staff.findAll({
                  attributes: ['staffId', 'staffNames']
                });

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

      function GetAllStaff() {
        return _GetAllStaff.apply(this, arguments);
      }

      return GetAllStaff;
    }()
  }, {
    key: "SearchStaff",
    value: function () {
      var _SearchStaff = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2(searchParam) {
        var staff;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _models["default"].Staff.findAll({
                  attributes: {
                    exclude: ['id', 'createdAt', 'updatedAt']
                  },
                  where: (0, _defineProperty2["default"])({}, op.or, [{
                    staffId: (0, _defineProperty2["default"])({}, op.like, '%' + searchParam + '%')
                  }, {
                    staffNames: (0, _defineProperty2["default"])({}, op.like, '%' + searchParam + '%')
                  }, {
                    staffTitle: (0, _defineProperty2["default"])({}, op.like, '%' + searchParam + '%')
                  }])
                });

              case 3:
                staff = _context2.sent;

                if (!staff) {
                  _context2.next = 6;
                  break;
                }

                return _context2.abrupt("return", staff);

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

      function SearchStaff(_x) {
        return _SearchStaff.apply(this, arguments);
      }

      return SearchStaff;
    }()
  }, {
    key: "searchTeacher",
    value: function () {
      var _searchTeacher = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee3() {
        var teacher;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return _models["default"].Staff.findAll({
                  attributes: ['staffId', 'staffNames'],
                  where: {
                    staffTitle: 'Teacher'
                  }
                });

              case 3:
                teacher = _context3.sent;

                if (!teacher) {
                  _context3.next = 6;
                  break;
                }

                return _context3.abrupt("return", teacher);

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

      function searchTeacher() {
        return _searchTeacher.apply(this, arguments);
      }

      return searchTeacher;
    }()
  }, {
    key: "AddStaff",
    value: function () {
      var _AddStaff = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee4(newStaff) {
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return _models["default"].Staff.create(newStaff);

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

      function AddStaff(_x2) {
        return _AddStaff.apply(this, arguments);
      }

      return AddStaff;
    }()
  }, {
    key: "UpdateStaff",
    value: function () {
      var _UpdateStaff = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee5(id, newStaff) {
        var StaffToUpdate;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return _models["default"].Staff.findOne({
                  where: {
                    staffId: id
                  }
                });

              case 3:
                StaffToUpdate = _context5.sent;

                if (!StaffToUpdate) {
                  _context5.next = 8;
                  break;
                }

                _context5.next = 7;
                return _models["default"].Staff.update(newStaff, {
                  where: {
                    staffId: id
                  }
                });

              case 7:
                return _context5.abrupt("return", newStaff);

              case 8:
                return _context5.abrupt("return", null);

              case 11:
                _context5.prev = 11;
                _context5.t0 = _context5["catch"](0);
                throw _context5.t0;

              case 14:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[0, 11]]);
      }));

      function UpdateStaff(_x3, _x4) {
        return _UpdateStaff.apply(this, arguments);
      }

      return UpdateStaff;
    }()
  }, {
    key: "DeleteStaff",
    value: function () {
      var _DeleteStaff = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee6(id) {
        var staffToDelete;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.prev = 0;
                _context6.next = 3;
                return _models["default"].Staff.findOne({
                  where: {
                    staffId: id
                  }
                });

              case 3:
                staffToDelete = _context6.sent;

                if (!staffToDelete) {
                  _context6.next = 8;
                  break;
                }

                _context6.next = 7;
                return _models["default"].Staff.destroy({
                  where: {
                    staffId: id
                  }
                });

              case 7:
                return _context6.abrupt("return", _context6.sent);

              case 8:
                _context6.next = 13;
                break;

              case 10:
                _context6.prev = 10;
                _context6.t0 = _context6["catch"](0);
                throw _context6.t0;

              case 13:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, null, [[0, 10]]);
      }));

      function DeleteStaff(_x5) {
        return _DeleteStaff.apply(this, arguments);
      }

      return DeleteStaff;
    }()
  }]);
  return staffService;
}();

var _default = staffService;
exports["default"] = _default;
//# sourceMappingURL=staffServices.js.map