'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Contry extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Contry.hasMany(models.ContryLanguage, { foreignKey: 'contriId'})
    }
  }
  Contry.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        notEmpty: true
      }
    },
    capital: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        notEmpty: true
      }
    },
    population: DataTypes.INTEGER,
    flag: DataTypes.STRING,
    currency: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Contry',
  });
  return Contry;
};