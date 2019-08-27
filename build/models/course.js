'use strict';

module.exports = function (sequelize, DataTypes) {
  var course = sequelize.define('course', {
    courseId: DataTypes.STRING,
    courseName: DataTypes.STRING
  }, {});

  course.associate = function (models) {// associations can be defined here
  };

  return course;
};
//# sourceMappingURL=course.js.map