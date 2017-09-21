'use strict';
module.exports = (sequelize, DataTypes) => {
  var Dictionary = sequelize.define('Dictionary', {
    name: {
      type: DataTypes.STRING,
      unique: true
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Dictionary;
};