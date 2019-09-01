'use strict';

module.exports = {
  up: function up(queryInterface, Sequelize) {
    return queryInterface.createTable('decisions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      year: {
        type: Sequelize.STRING
      },
      studentId: {
        type: Sequelize.STRING
      },
      studentNames: {
        type: Sequelize.STRING
      },
      decision: {
        type: Sequelize.STRING
      },
      decisionId: {
        type: Sequelize.STRING
      },
      classId: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function down(queryInterface, Sequelize) {
    return queryInterface.dropTable('decisions');
  }
};
//# sourceMappingURL=20190831190110-create-decision.js.map