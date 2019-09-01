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

var util = new _Util["default"]();

var viewController =
/*#__PURE__*/
function () {
  function viewController() {
    (0, _classCallCheck2["default"])(this, viewController);
  }

  (0, _createClass2["default"])(viewController, null, [{
    key: "getMainView",
    value: function () {
      var _getMainView = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(req, res) {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                return _context.abrupt("return", res.render('index', {
                  Context1: "value1"
                }));

              case 4:
                _context.prev = 4;
                _context.t0 = _context["catch"](0);
                util.setError(400, _context.t0.message);
                return _context.abrupt("return", util.send(res));

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 4]]);
      }));

      function getMainView(_x, _x2) {
        return _getMainView.apply(this, arguments);
      }

      return getMainView;
    }()
  }]);
  return viewController;
}();

var _default = viewController;
exports["default"] = _default;
//# sourceMappingURL=viewController.js.map