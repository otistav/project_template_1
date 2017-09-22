'use strict';
module.exports = (sequelize, DataTypes) => {
  var ItemValue = sequelize.define('ItemValue', {
    uuid: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    attribute_id: DataTypes.UUID,
    item_id: DataTypes.UUID,
    number_value: DataTypes.INTEGER,
    string_value: DataTypes.STRING,
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