'use strict';
module.exports = (sequelize, DataTypes) => {
  const accessLevel = sequelize.define('accessLevel', {
    username: DataTypes.STRING,
    accessLevel: DataTypes.STRING
  }, {});
  accessLevel.associate = function(models) {
    // associations can be defined here
  };
  return accessLevel;
};