'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ItemValues', {
      uuid: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      attribute_id: {
        type: Sequelize.UUID
      },
      item_id: {
        type: Sequelize.UUID
      },
      number_value: {
        type: Sequelize.INTEGER
      },
      string_value: {
        type: Sequelize.STRING
      },
      date_value: {
        type: Sequelize.DATE
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
    return queryInterface.dropTable('ItemValues');
  }
};