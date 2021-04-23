"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn("users", "avatar_id", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
    });
  },

  down: async (queryInterface) => {
    queryInterface.dropTable("files");
  },
};
