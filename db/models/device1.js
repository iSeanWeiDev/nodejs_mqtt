'use strict';
module.exports = (sequelize, DataTypes) => {
  const Device1 = sequelize.define('Device1', {
    indoor: DataTypes.STRING,
    outdoor: DataTypes.STRING,
    return: DataTypes.STRING
  }, {});
  Device1.associate = function(models) {
    // associations can be defined here
  };
  return Device1;
};