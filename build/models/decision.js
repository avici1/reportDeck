'use strict';

module.exports = function (sequelize, DataTypes) {
  var decision = sequelize.define('decision', {
    year: DataTypes.STRING,
    studentId: DataTypes.STRING,
    studentNames: DataTypes.STRING,
    decision: DataTypes.STRING,
    decisionId: DataTypes.STRING,
    classId: DataTypes.STRING
  }, {});

  decision.associate = function (models) {// associations can be defined here
  };

  return decision;
};
//# sourceMappingURL=decision.js.map