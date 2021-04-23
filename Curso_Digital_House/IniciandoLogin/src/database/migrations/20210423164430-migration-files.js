'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.createTable('files', {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        path: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true,
        },
      
      });     
  },

  down:  (queryInterface) => {
     return queryInterface.dropTable('files');     
  },
};