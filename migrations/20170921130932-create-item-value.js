'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ItemValues', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      attribute_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'DictionaryAttributes',
          key: 'id'
        }
      },
      item_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Items',
          key: 'id'
        }
      },
      number_value: {
        type: Sequelize.INTEGER
      },
      string_value: {
        type: Sequelize.STRING
      },
      boolean_value: {
        type: Sequelize.BOOLEAN
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