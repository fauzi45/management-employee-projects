const db = require("../../models");
const _ = require("lodash");
const GeneralHelper = require("./generalHelper");
const Boom = require("boom");
const fileName = "server/helpers/TeamProjectHelper.js";

const getTeamProjectListHelper = async () => {
  try {
    const checkTeamProject = await db.TeamProjects.findAll({
      include: [
        {
          model: db.Employees,
          as: "employee",
          include: [
            {
              model: db.Departments,
              as: "department",
              attributes: { exclude: ["createdAt", "updatedAt"] },
            },
          ],
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
        },
        {
          model: db.Projects,
          as: "project",
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
        },
      ],
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });
    if (_.isEmpty(checkTeamProject)) {
      return Promise.reject(Boom.badRequest("Team Project data is empty"));
    }
    return Promise.resolve(checkTeamProject);
  } catch (err) {
    console.log([fileName, "getProjectListHelper", "ERROR"], {
      info: `${err}`,
    });
    return Promise.reject(GeneralHelper.errorResponse(err));
  }
};

const getTeamProjectDetailHelper = async (id) => {
  try {
    const response = await db.TeamProjects.findOne({
      include: [
        {
          model: db.Employees,
          as: "employee",
          include: [
            {
              model: db.Departments,
              as: "department",
              attributes: { exclude: ["createdAt", "updatedAt"] },
            },
          ],
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
        },
        {
          model: db.Projects,
          as: "project",
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
        },
      ],
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
      where: { id: id },
    });
    if (!response) {
      return Promise.reject(
        Boom.badRequest("Team Project with this id is doesn't exist")
      );
    }
    return Promise.resolve(response);
  } catch (error) {
    console.log([fileName, "getTeamProjectDetailHelper", "ERROR"], {
      info: `${err}`,
    });
    return Promise.reject(GeneralHelper.errorResponse(err));
  }
};

const createTeamProjectHelper = async (dataObject) => {
  try {
    const { employeeId, projectId, name, role } = dataObject;
    const dataEmployee = await db.Employees.findOne({
      where: { id: employeeId },
    });
    const checkProject = await db.Projects.findOne({
      where: { id: projectId },
    });
    if (_.isEmpty(dataEmployee)) {
      return Promise.reject(
        Boom.badRequest("Employee with this id doesn't exist")
      );
    }
    if (_.isEmpty(checkProject)) {
      return Promise.reject(
        Boom.badRequest("Project with this id doesn't exist")
      );
    }
    const response = await db.TeamProjects.create({
      employeeId: employeeId,
      projectId: projectId,
      name: name,
      role: role,
    });
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error);
  }
};

const updateTeamProjectHelper = async (
  id,
  employeeId,
  projectId,
  name,
  role
) => {
  try {
    const checkTeamProject = await db.TeamProjects.findOne({
      where: { id: id },
    });
    const dataEmployee = await db.Employees.findOne({
      where: { id: employeeId },
    });
    const checkProject = await db.Projects.findOne({
      where: { id: projectId },
    });
    if (_.isEmpty(checkTeamProject)) {
      return Promise.reject(
        Boom.badRequest("Team Project with this id is doesn't exist")
      );
    }
    if (_.isEmpty(dataEmployee)) {
      return Promise.reject(
        Boom.badRequest("Employee with this id doesn't exist")
      );
    }
    if (_.isEmpty(checkProject)) {
      return Promise.reject(
        Boom.badRequest("Project with this id doesn't exist")
      );
    }

    await db.TeamProjects.update(
      {
        employeeId: employeeId
          ? employeeId
          : checkProject.dataValues.employeeId,
        projectId: projectId ? projectId : checkProject.dataValues.projectId,
        name: name ? name : checkProject.dataValues.name,
        role: role ? role : checkProject.dataValues.role,
      },
      { where: { id: id } }
    );
    return Promise.resolve(true);
  } catch (error) {
    return Promise.reject(GeneralHelper.errorResponse(err));
  }
};

const deleteTeamProjectHelper = async (id) => {
  try {
    const checkProject = await db.TeamProjects.findOne({
      where: { id: id },
    });
    if (!checkProject) {
      return Promise.reject(
        Boom.badRequest("Project with this id is doesn't exist")
      );
    } else {
      await db.TeamProjects.destroy({
        where: {
          id: id,
        },
      });
    }
    return Promise.resolve(true);
  } catch (err) {
    console.log([fileName, "deleteProjectHelper", "ERROR"], {
      info: `${err}`,
    });
    return Promise.reject(GeneralHelper.errorResponse(err));
  }
};

module.exports = {
  getTeamProjectListHelper,
  createTeamProjectHelper,
  getTeamProjectDetailHelper,
  updateTeamProjectHelper,
  deleteTeamProjectHelper,
};
