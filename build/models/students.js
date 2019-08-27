'use strict';

module.exports = function (sequelize, DataTypes) {
  var Students = sequelize.define('Students', {
    matricule: DataTypes.STRING,
    names: DataTypes.STRING,
    birthDate: DataTypes.STRING,
    MotherName: DataTypes.STRING,
    FatherName: DataTypes.STRING,
    countryOfOrigin: DataTypes.STRING,
    citizenship: DataTypes.STRING,
    isStudying: DataTypes.STRING,
    isFatherAlive: DataTypes.STRING,
    isMotherAlive: DataTypes.STRING
  }, {});

  Students.associate = function (models) {// associations can be defined here
  };

  return Students;
};
//# sourceMappingURL=students.js.map