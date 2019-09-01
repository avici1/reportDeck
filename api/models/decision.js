'use strict';
module.exports = (sequelize, DataTypes) => {
  const decision = sequelize.define('decision', {
    year: DataTypes.STRING,
    studentId: DataTypes.STRING,
    studentNames: DataTypes.STRING,
    decision: DataTypes.STRING,
    decisionId: DataTypes.STRING,
    classId: DataTypes.STRING
  }, {});
  decision.associate = function(models) {
    // associations can be defined here
  };
  return decision;
};