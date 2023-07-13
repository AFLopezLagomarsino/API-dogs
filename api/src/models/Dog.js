const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('dog', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id:{
      type: DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false
    },
    image:{
      type: DataTypes.STRING,
      allowNull:false
    },
    weightMin:{
      type: DataTypes.FLOAT,
      allowNull:false
    },
    weightMax:{
      type: DataTypes.FLOAT,
      allowNull:false,
    },
    heightMin:{
      type: DataTypes.FLOAT,
      allowNull:false,
    },
    heightMax:{
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    lifeSpan:{
      type: DataTypes.STRING,
      allowNull:false
    },
    //createindb funciona para ayudar en el filtro
    ceateInDb:{
       type: DataTypes.BOOLEAN,
       allowNull:false,
       defaultValue: false
    }
  },{timestamps: false});
};
