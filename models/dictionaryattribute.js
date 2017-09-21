'use strict';
module.exports = (sequelize, DataTypes) => {
  var DictionaryAttribute = sequelize.define('DictionaryAttribute', {
    name: DataTypes.STRING,
    dictionary_id: DataTypes.INTEGER,
    type_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return DictionaryAttribute;
};