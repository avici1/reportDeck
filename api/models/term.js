'use strict';
export default (sequelize, DataTypes) => {
  const Term = sequelize.define('Term', {
    studentId: DataTypes.STRING,
    maxTj: DataTypes.INTEGER,
    tj: DataTypes.INTEGER,
    maxExam: DataTypes.INTEGER,
    exam: DataTypes.INTEGER,
    course: DataTypes.STRING,
    classId:DataTypes.STRING,
    term:DataTypes.STRING
  }, {});
  Term.associate = function(models) {
    // associations can be defined here
  };
  return Term;
};