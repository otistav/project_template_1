'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('DictionaryAttributes', {
      uuid: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      name: {
        type: Sequelize.STRING,
        unique: true
      },
      dictionary_id: {
        type: Sequelize.UUID,
        references: {
          model: 'Dictionaries',
          key: 'uuid'
        }
      },
      type_id: {
        type: Sequelize.UUID,
        references: {
          model: 'Types',
          key: 'uuid'
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
    return queryInterface.dropTable('DictionaryAttributes');
  }
};