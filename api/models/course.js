'use strict';
module.exports = (sequelize, DataTypes) => {
  const course = sequelize.define('course', {
    courseId: DataTypes.STRING,
    courseName: DataTypes.STRING
  }, {});
  course.associate = function(models) {
    // associations can be defined here
  };
  return course;
};