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

var userServices =
/*#__PURE__*/
function () {
  function userServices() {
    (0, _classCallCheck2["default"])(this, userServices);
  }

  (0, _createClass2["default"])(userServices, null, [{
    key: "createNewUser",
    value: function () {
      var _createNewUser = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(newUser) {
        var newUser_;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _models["default"].users.create(newUser);

              case 3:
                newUser_ = _context.sent;

                if (!newUser_) {
                  _context.next = 6;
                  break;
                }

                return _context.abrupt("return", newUser_);

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

      function createNewUser(_x) {
        return _createNewUser.apply(this, arguments);
      }

      return createNewUser;
    }()
  }]);
  return userServices;
}();

var _default = userServices;
exports["default"] = _default;
//# sourceMappingURL=userServices.js.map