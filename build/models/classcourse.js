'use strict';

module.exports = function (sequelize, DataTypes) {
  var classCourse = sequelize.define('classCourse', {
    courseId: DataTypes.STRING,
    classId: DataTypes.STRING
  }, {});

  classCourse.associate = function (models) {// associations can be defined here
  };

  return classCourse;
};
//# sourceMappingURL=classcourse.js.map