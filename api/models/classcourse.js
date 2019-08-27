'use strict';
module.exports = (sequelize, DataTypes) => {
  const classCourse = sequelize.define('classCourse', {
    courseId: DataTypes.STRING,
    classId: DataTypes.STRING
  }, {});
  classCourse.associate = function(models) {
    // associations can be defined here
  };
  return classCourse;
};