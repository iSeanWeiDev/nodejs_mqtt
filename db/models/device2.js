'use strict';
module.exports = (sequelize, DataTypes) => {
  const Device2 = sequelize.define('Device2', {
    circulation: DataTypes.STRING,
    supply: DataTypes.STRING
  }, {});
  Device2.associate = function(models) {
    // associations can be defined here
  };
  return Device2;
};