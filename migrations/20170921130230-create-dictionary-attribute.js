'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('DictionaryAttributes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      attribute_name: {
        type: Sequelize.STRING
      },
      dictionary_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Dictionaries',
          key: 'id'
        }
      },
      type_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Types',
          key: 'id'
        }
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
    return queryInterface.dropTable('Attributes');
  }
};