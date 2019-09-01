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

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var _Util = _interopRequireDefault(require("../utils/Util"));

var _userServices = _interopRequireDefault(require("../services/userServices"));

var util = new _Util["default"]();

var UserController =
/*#__PURE__*/
function () {
  function UserController() {
    (0, _classCallCheck2["default"])(this, UserController);
  }

  (0, _createClass2["default"])(UserController, null, [{
    key: "createUser",
    value: function () {
      var _createUser = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(req, res) {
        var hashed, securedUser, newUser;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                hashed = '';
                _context.prev = 1;

                _bcryptjs["default"].genSalt(10, function (err, salt) {
                  _bcryptjs["default"].hash(req.body.password, salt, function (err, hashed) {
                    req.body.password = hashed;
                  });
                });

                securedUser = {
                  accessLevel: req.body.accessLevel,
                  username: req.body.username,
                  password: hashed
                };
                _context.next = 6;
                return _userServices["default"].createNewUser(securedUser);

              case 6:
                newUser = _context.sent;

                if (!(Object.values(newUser).length >= 1)) {
                  _context.next = 12;
                  break;
                }

                util.setSuccess("User Added successfully", 200, securedUser);
                return _context.abrupt("return", util.send(res));

              case 12:
                util.setError(400, "Couldn't add user");
                return _context.abrupt("return", util.send(res));

              case 14:
                _context.next = 20;
                break;

              case 16:
                _context.prev = 16;
                _context.t0 = _context["catch"](1);
                util.setError(400, "A problem occured >> " + _context.t0.message);
                return _context.abrupt("return", util.send(res));

              case 20:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 16]]);
      }));

      function createUser(_x, _x2) {
        return _createUser.apply(this, arguments);
      }

      return createUser;
    }()
  }]);
  return UserController;
}();

var _default = UserController;
exports["default"] = _default;
//# sourceMappingURL=userController.js.map