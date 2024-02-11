"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Employees extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Employees.belongsTo(models.Departments, {
        foreignKey: "departmentId",
        as: "department",
      });
      Employees.hasMany(models.TeamProjects, {
        as: "project",
        foreignKey: "employeeId",
      })
    }
  }
  Employees.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      position: DataTypes.STRING,
      departmentId: DataTypes.INTEGER,
      isAdmin: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Employees",
    }
  );
  return Employees;
};
