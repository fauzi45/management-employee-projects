'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TeamProjects extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      TeamProjects.belongsTo(models.Employees, {
        as: "employee",
        foreignKey: "employeeId",
      });
      TeamProjects.belongsTo(models.Projects, {
        as: "project",
        foreignKey: "projectId",
      });
    }
  }
  TeamProjects.init({
    employeeId: DataTypes.INTEGER,
    projectId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'TeamProjects',
  });
  return TeamProjects;
};