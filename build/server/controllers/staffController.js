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

var _Util = _interopRequireDefault(require("../utils/Util"));

var _staffServices = _interopRequireDefault(require("../services/staffServices"));

var _pdfLib = require("pdf-lib");

var util = new _Util["default"]();

var staffController =
/*#__PURE__*/
function () {
  function staffController() {
    (0, _classCallCheck2["default"])(this, staffController);
  }

  (0, _createClass2["default"])(staffController, null, [{
    key: "getListStaff",
    value: function () {
      var _getListStaff = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(req, res) {
        var staffList;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _staffServices["default"].GetAllStaff();

              case 3:
                staffList = _context.sent;

                if (!(staffList.length > 0)) {
                  _context.next = 9;
                  break;
                }

                util.setSuccess("Staff found successfully", 200, staffList);
                return _context.abrupt("return", util.send(res));

              case 9:
                util.setSuccess("Staff Not found", 200, staffList);
                return _context.abrupt("return", util.send(res));

              case 11:
                _context.next = 17;
                break;

              case 13:
                _context.prev = 13;
                _context.t0 = _context["catch"](0);
                util.setError(400, _context.t0.message);
                return _context.abrupt("return", util.send(res));

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 13]]);
      }));

      function getListStaff(_x, _x2) {
        return _getListStaff.apply(this, arguments);
      }

      return getListStaff;
    }()
  }, {
    key: "AddNewStaff",
    value: function () {
      var _AddNewStaff = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2(req, res) {
        var newStaff, addedStaff;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                newStaff = req.body;

                if (!(!req.body.staffId || !req.body.staffNames || !req.body.staffTitle)) {
                  _context2.next = 7;
                  break;
                }

                util.setError(400, "Please send complete information");
                return _context2.abrupt("return", util.send(res));

              case 7:
                _context2.next = 9;
                return _staffServices["default"].AddStaff(newStaff);

              case 9:
                addedStaff = _context2.sent;
                util.setSuccess("Staff added succefully", 200, addedStaff);
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

      function AddNewStaff(_x3, _x4) {
        return _AddNewStaff.apply(this, arguments);
      }

      return AddNewStaff;
    }()
  }, {
    key: "searchStaff",
    value: function () {
      var _searchStaff = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee3(req, res) {
        var id, staff;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                id = req.params.id;
                _context3.prev = 1;

                if (id) {
                  _context3.next = 7;
                  break;
                }

                util.setError(400, "Please provide accurate search information Q is ".concat(id));
                return _context3.abrupt("return", util.send(res));

              case 7:
                _context3.next = 9;
                return _staffServices["default"].SearchStaff(id);

              case 9:
                staff = _context3.sent;

                if (!(Object.values(staff).length >= 1 == false)) {
                  _context3.next = 15;
                  break;
                }

                util.setError(400, "Can't find that staff");
                return _context3.abrupt("return", util.send(res));

              case 15:
                util.setSuccess("Staff found successfully", 200, staff);
                return _context3.abrupt("return", util.send(res));

              case 17:
                _context3.next = 23;
                break;

              case 19:
                _context3.prev = 19;
                _context3.t0 = _context3["catch"](1);
                util.setError(400, _context3.t0.message);
                return _context3.abrupt("return", util.send(res));

              case 23:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[1, 19]]);
      }));

      function searchStaff(_x5, _x6) {
        return _searchStaff.apply(this, arguments);
      }

      return searchStaff;
    }()
  }, {
    key: "updateStaff",
    value: function () {
      var _updateStaff = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee4(req, res) {
        var id, updated, staffToUpdate, staff;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                id = req.params.id;
                updated = req.body;

                if (id) {
                  _context4.next = 8;
                  break;
                }

                util.setError(400, "Wrong search parameter");
                return _context4.abrupt("return", util.send(res));

              case 8:
                if (!(Object.values(updated).length >= 1 == false)) {
                  _context4.next = 13;
                  break;
                }

                util.setError(400, "You sent empty body");
                return _context4.abrupt("return", util.send(res));

              case 13:
                _context4.next = 15;
                return _staffServices["default"].SearchStaff(id);

              case 15:
                staffToUpdate = _context4.sent;

                if (staffToUpdate) {
                  _context4.next = 21;
                  break;
                }

                util.setError(400, "Can't find what you're trying to update");
                return _context4.abrupt("return", util.send(res));

              case 21:
                _context4.next = 23;
                return _staffServices["default"].UpdateStaff(id, updated);

              case 23:
                staff = _context4.sent;
                util.setSuccess("Staff updated successfully", 200, staff);
                return _context4.abrupt("return", util.send(res));

              case 26:
                _context4.next = 32;
                break;

              case 28:
                _context4.prev = 28;
                _context4.t0 = _context4["catch"](0);
                util.setError(400, _context4.t0.message);
                return _context4.abrupt("return", util.send(res));

              case 32:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 28]]);
      }));

      function updateStaff(_x7, _x8) {
        return _updateStaff.apply(this, arguments);
      }

      return updateStaff;
    }()
  }, {
    key: "deleteStaff",
    value: function () {
      var _deleteStaff = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee5(req, res) {
        var id, deletedStaff;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                id = req.params.id;

                if (id) {
                  _context5.next = 6;
                  break;
                }

                util.setError(404, 'Please provide a valid parameter');
                return _context5.abrupt("return", util.send(res));

              case 6:
                _context5.prev = 6;
                _context5.next = 9;
                return _staffServices["default"].DeleteStaff(id);

              case 9:
                deletedStaff = _context5.sent;

                if (deletedStaff) {
                  _context5.next = 15;
                  break;
                }

                util.setError(404, "Staff with Id ".concat(id, " not found"));
                return _context5.abrupt("return", util.send(res));

              case 15:
                util.setSuccess("Staff with Id ".concat(id, " deleted successfully"), 200, deletedStaff);
                return _context5.abrupt("return", util.send(res));

              case 17:
                _context5.next = 23;
                break;

              case 19:
                _context5.prev = 19;
                _context5.t0 = _context5["catch"](6);
                util.setError(404, "can't delete the class");
                return _context5.abrupt("return", util.send(res));

              case 23:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[6, 19]]);
      }));

      function deleteStaff(_x9, _x10) {
        return _deleteStaff.apply(this, arguments);
      }

      return deleteStaff;
    }()
  }]);
  return staffController;
}();

var _default = staffController;
exports["default"] = _default;
//# sourceMappingURL=staffController.js.map