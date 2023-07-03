const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  sequelize.define('temperaments', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey:true,
      autoincrement: true,
      unique: true
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false,
        unique:true
    }
},{timestamps: false});
};