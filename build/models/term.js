'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default(sequelize, DataTypes) {
  var Term = sequelize.define('Term', {
    studentId: DataTypes.STRING,
    maxTj: DataTypes.INTEGER,
    tj: DataTypes.INTEGER,
    maxExam: DataTypes.INTEGER,
    exam: DataTypes.INTEGER,
    course: DataTypes.STRING,
    classId: DataTypes.STRING,
    term: DataTypes.STRING
  }, {});

  Term.associate = function (models) {// associations can be defined here
  };

  return Term;
};

exports["default"] = _default;
//# sourceMappingURL=term.js.map