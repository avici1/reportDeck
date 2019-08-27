'use strict';
module.exports = (sequelize, DataTypes) => {
  const courseTeacher = sequelize.define('courseTeacher', {
    teacherId: DataTypes.STRING,
    teachername: DataTypes.STRING,
    courseId: DataTypes.STRING,
    courseName: DataTypes.STRING,
    classId:DataTypes.STRING
  }, {});
  courseTeacher.associate = function(models) {
    // associations can be defined here
  };
  return courseTeacher;
};