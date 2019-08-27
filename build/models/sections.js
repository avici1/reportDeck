'use strict';

module.exports = function (sequelize, DataTypes) {
  var sections = sequelize.define('sections', {
    sectionId: DataTypes.STRING,
    sectionName: DataTypes.STRING,
    schoolId: DataTypes.STRING
  }, {});

  sections.associate = function (models) {// associations can be defined here
  };

  return sections;
};
//# sourceMappingURL=sections.js.map