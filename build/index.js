"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _classRouter = _interopRequireDefault(require("./server/routes/classRouter"));

var _studentParameterRouter = _interopRequireDefault(require("./server/routes/studentParameterRouter"));

var _termRoutes = _interopRequireDefault(require("./server/routes/termRoutes"));

var _studentRoutes = _interopRequireDefault(require("./server/routes/studentRoutes"));

var _sectionRoutes = _interopRequireDefault(require("./server/routes/sectionRoutes"));

var _courseTeacherRoutes = _interopRequireDefault(require("./server/routes/courseTeacherRoutes"));

var _staffRoutes = _interopRequireDefault(require("./server/routes/staffRoutes"));

var _cors = _interopRequireDefault(require("cors"));

var app = (0, _express["default"])();
app.use(_bodyParser["default"].json());
app.use((0, _cors["default"])());
app.use('/api', _classRouter["default"]);
app.use('/api/staff', _staffRoutes["default"]);
app.use('/api/stdp', _studentParameterRouter["default"]);
app.use('/api/term', _termRoutes["default"]);
app.use('/api/std', _studentRoutes["default"]);
app.use('/api/section', _sectionRoutes["default"]);
app.use('/api/ct', _courseTeacherRoutes["default"]);
app.use(_bodyParser["default"].urlencoded({
  extended: false
}));
var port = process.env.PORT || 8001;
app.get('*', function (req, res) {
  return res.status(200).send({
    message: "Entrance"
  });
});
app.listen(port, function () {
  console.log("Entrance done, We are running at port " + port);
});
var _default = app;
exports["default"] = _default;
//# sourceMappingURL=index.js.map