'use strict';

module.exports = function (sequelize, DataTypes) {
  var Staff = sequelize.define('Staff', {
    staffId: DataTypes.STRING,
    staffNames: DataTypes.STRING,
    staffTitle: DataTypes.STRING
  }, {});

  Staff.associate = function (models) {// associations can be defined here
  };

  return Staff;
};
//# sourceMappingURL=staff.js.map