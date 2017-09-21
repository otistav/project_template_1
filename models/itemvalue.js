'use strict';
module.exports = (sequelize, DataTypes) => {
  var ItemValue = sequelize.define('ItemValue', {
    attribute_id: DataTypes.INTEGER,
    item_id: DataTypes.INTEGER,
    number_value: DataTypes.INTEGER,
    string_value: DataTypes.STRING,
    boolean_value: DataTypes.BOOLEAN,
    date_value: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return ItemValue;
};