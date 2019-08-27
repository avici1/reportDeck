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

var _schoolparameterServices = _interopRequireDefault(require("../services/schoolparameterServices"));

var _Util = _interopRequireDefault(require("../utils/Util"));

var util = new _Util["default"]();

var schoolParameterController =
/*#__PURE__*/
function () {
  function schoolParameterController() {
    (0, _classCallCheck2["default"])(this, schoolParameterController);
  }

  (0, _createClass2["default"])(schoolParameterController, null, [{
    key: "addNew",
    value: function () {
      var _addNew = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(req, res) {
        var body, added;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                body = req.body;
                _context.next = 4;
                return _schoolparameterServices["default"].addNew(body);

              case 4:
                added = _context.sent;

                if (body) {
                  _context.next = 10;
                  break;
                }

                util.setError(400, "can't add a new record");
                return _context.abrupt("return", util.send(res));

              case 10:
                util.setSuccess("Sent successfully", 200, added);
                return _context.abrupt("return", util.send(res));

              case 12:
                _context.next = 18;
                break;

              case 14:
                _context.prev = 14;
                _context.t0 = _context["catch"](0);
                util.setError(400, "can't add a new record");
                return _context.abrupt("return", util.send(res));

              case 18:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 14]]);
      }));

      function addNew(_x, _x2) {
        return _addNew.apply(this, arguments);
      }

      return addNew;
    }()
  }, {
    key: "updateSchool",
    value: function () {
      var _updateSchool = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2(req, res) {
        var id, updated, updated_class;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                id = req.params.id;
                updated = req.body;

                if (Number(id)) {
                  _context2.next = 7;
                  break;
                }

                util.setError(404, 'Please provide a valid parameter');
                return _context2.abrupt("return", util.send(res));

              case 7:
                _context2.prev = 7;

                if (!(Object.values(updated).length >= 1 == false)) {
                  _context2.next = 13;
                  break;
                }

                util.setError(404, "sent empty fields");
                return _context2.abrupt("return", util.send(res));

              case 13:
                _context2.next = 15;
                return _schoolparameterServices["default"].updater(id, updated);

              case 15:
                updated_class = _context2.sent;

                if (updated_class) {
                  _context2.next = 21;
                  break;
                }

                util.setError(404, "cant update a class");
                return _context2.abrupt("return", util.send(res));

              case 21:
                util.setSuccess('School record updated successfully', 200, updated_class);
                return _context2.abrupt("return", util.send(res));

              case 23:
                _context2.next = 29;
                break;

              case 25:
                _context2.prev = 25;
                _context2.t0 = _context2["catch"](7);
                util.setError(404, 'Oops something Went wrong cant update the book >> ' + _context2.t0.message);
                return _context2.abrupt("return", util.send(res));

              case 29:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[7, 25]]);
      }));

      function updateSchool(_x3, _x4) {
        return _updateSchool.apply(this, arguments);
      }

      return updateSchool;
    }() //No delete options available

  }, {
    key: "getAll",
    value: function () {
      var _getAll = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee3(req, res) {
        var all;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return _schoolparameterServices["default"].getAll();

              case 3:
                all = _context3.sent;

                if (all) {
                  _context3.next = 9;
                  break;
                }

                util.setError(400, "Records can't be found");
                return _context3.abrupt("return", util.send(res));

              case 9:
                util.setSuccess("Records found successfully", 200, all);
                return _context3.abrupt("return", util.send(res));

              case 11:
                _context3.next = 17;
                break;

              case 13:
                _context3.prev = 13;
                _context3.t0 = _context3["catch"](0);
                util.setError(400, _context3.t0.message);
                return _context3.abrupt("return", util.send(res));

              case 17:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 13]]);
      }));

      function getAll(_x5, _x6) {
        return _getAll.apply(this, arguments);
      }

      return getAll;
    }()
  }]);
  return schoolParameterController;
}();

var _default = schoolParameterController;
exports["default"] = _default;
//# sourceMappingURL=schoolParameterController.js.map