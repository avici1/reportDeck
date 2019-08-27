'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Students', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      matricule: {
        type: Sequelize.STRING
      },
      names: {
        type: Sequelize.STRING
      },
      birthDate:{
        type:Sequelize.STRING
      },
      FatherName:{
        type:Sequelize.STRING
      },
      MotherName:{
        type:Sequelize.STRING
      },
      countryOfOrigin:{
        type:Sequelize.STRING
      },
      citizenship:{
        type:Sequelize.STRING
      },
      isStudying:{
        type:Sequelize.STRING
      },
      isFatherAlive:{
        type: Sequelize.STRING
      },
      isMotherAlive:{
        type:Sequelize.STRING
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Students');
  }
};