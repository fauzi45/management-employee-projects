'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Departments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Departments.hasMany(models.Employees,{
        as: 'department',
        foreignKey: 'departmentId'
      });
    }
  }
  Departments.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Departments',
  });
  return Departments;
};