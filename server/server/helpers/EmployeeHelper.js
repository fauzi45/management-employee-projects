const db = require("../../models");
const _ = require("lodash");
const GeneralHelper = require("./generalHelper");
const Boom = require("boom");
const fileName = "server/helpers/EmployeeHelper.js";

const getEmployeeListHelper = async () => {
  try {
    const checkEmployee = await db.Employees.findAll({
      include: "department",
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      }
    });
    if (_.isEmpty(checkEmployee)) {
      return Promise.reject(Boom.badRequest("Employee data is empty"));
    }
    return Promise.resolve(checkEmployee);
  } catch (err) {
    console.log([fileName, "getEmployeeListHelper", "ERROR"], {
      info: `${err}`,
    });
    return Promise.reject(GeneralHelper.errorResponse(err));
  }
};

const getEmployeeDetailHelper = async (id) => {
  try {
    const response = await db.Employees.findOne({
      where: { id: id },
      include: "department",
    });
    if (!response) {
      return Promise.reject(
        Boom.badRequest("Employee with this id is doesn't exist")
      );
    }
    return Promise.resolve(response);
  } catch (error) {
    console.log([fileName, "getEmployeeDetailHelper", "ERROR"], {
      info: `${err}`,
    });
    return Promise.reject(GeneralHelper.errorResponse(err));
  }
};

const deleteProject = async (req, res) => {
  try {
    ValidationProjectHelper.deleteProjectValidation(req.params);
    const { id } = req.params;
    const response = await ProjectHelper.deleteProjectHelper(id);
    return res.status(200).send({
      message: "Project data successfully deleted",
      response,
    });
  } catch (err) {
    console.log([fileName, "deleteProject", "ERROR"], { info: `${err}` });
    return res.send(GeneralHelper.errorResponse(err));
  }
};

module.exports = {
    getEmployeeListHelper,
    getEmployeeDetailHelper
  };