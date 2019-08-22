'use strict';

module.exports = {
  up: function up(queryInterface, Sequelize) {
    return queryInterface.createTable('courseTeachers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      teacherId: {
        type: Sequelize.STRING
      },
      teachername: {
        type: Sequelize.STRING
      },
      courseId: {
        type: Sequelize.STRING
      },
      courseName: {
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
    return queryInterface.dropTable('courseTeachers');
  }
};
//# sourceMappingURL=20190820092802-create-course-teacher.js.map