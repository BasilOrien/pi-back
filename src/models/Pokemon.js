const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    vida: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ataque: {
      type: DataTypes.STRING
    },
    defenza: {
      type: DataTypes.STRING
    },
    velocidad:{
      type: DataTypes.STRING
    },
    altura: {
      type: DataTypes.STRING

    },
    peso: {
      type: DataTypes.STRING
    }

  },{
    timestamps: false,
  });
  sequelize.define('tipo'),{
    nombre: {
      type: DataTypes.STRING
    }
  }
  sequelize.define('pokemontipo', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    }
  }, {timestamps: false})
};
