'use strict';
module.exports = (sequelize, DataTypes) => {
  var DictionaryAttribute = sequelize.define('DictionaryAttribute', {
    uuid: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    name: {
      type: DataTypes.STRING,
      unique: true
    },
    dictionary_id: DataTypes.UUID,
    type_id: DataTypes.UUID
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return DictionaryAttribute;
};