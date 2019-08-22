'use strict';

module.exports = {
  up: function up(queryInterface, Sequelize) {
    return queryInterface.createTable('Terms', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      maxTj: {
        type: Sequelize.INTEGER
      },
      studentId: {
        type: Sequelize.STRING
      },
      tj: {
        type: Sequelize.INTEGER
      },
      maxExam: {
        type: Sequelize.INTEGER
      },
      exam: {
        type: Sequelize.INTEGER
      },
      classId: {
        type: Sequelize.STRING
      },
      course: {
        type: Sequelize.STRING
      },
      term: {
        type: Sequelize.STRING
      },
      birthDate: {
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
    return queryInterface.dropTable('Terms');
  }
};
//# sourceMappingURL=20190812060928-create-term.js.map