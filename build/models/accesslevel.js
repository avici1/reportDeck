'use strict';

module.exports = function (sequelize, DataTypes) {
  var accessLevel = sequelize.define('accessLevel', {
    username: DataTypes.STRING,
    accessLevel: DataTypes.STRING
  }, {});

  accessLevel.associate = function (models) {// associations can be defined here
  };

  return accessLevel;
};
//# sourceMappingURL=accesslevel.js.map