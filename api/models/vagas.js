'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class vagas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  vagas.init({
    title: DataTypes.STRING,
    job_description: DataTypes.TEXT,
    salary: DataTypes.STRING,
    modality: DataTypes.STRING,
    job_type: DataTypes.STRING,
    publication: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'vagas',
  });
  return vagas;
};