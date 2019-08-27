'use strict';

module.exports = function (sequelize, DataTypes) {
  var studentsClass = sequelize.define('studentsClass', {
    studentId: DataTypes.STRING,
    classId: DataTypes.STRING
  }, {});

  studentsClass.associate = function (models) {// associations can be defined here
  };

  return studentsClass;
};
//# sourceMappingURL=studentsclass.js.map