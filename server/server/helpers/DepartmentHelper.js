const db = require("../../models");
const _ = require("lodash");
const GeneralHelper = require("./generalHelper");
const Boom = require('boom');
const fileName = "server/helpers/DepartmentHelper.js";

const getDepartmentListHelper = async () => {
  try {
    const checkDepartment = await db.Departments.findAll();
    return Promise.resolve(checkDepartment);
  } catch (err) {
    console.log([fileName, "getDepartmentListHelper", "ERROR"], {
      info: `${err}`,
    });
    return Promise.reject(GeneralHelper.errorResponse(err));
  }
};

const createDepartmentHelper = async (name) => {
  try {
    const response = await db.Departments.create({
      name: name,
    });
    return Promise.resolve(response);
  } catch (err) {
    console.log([fileName, "createDepartmentHelper", "ERROR"], {
      info: `${err}`,
    });
    return Promise.reject(GeneralHelper.errorResponse(err));
  }
};

const deleteDepartmentHelper = async (id) => {
  try {
    const checkDepartment = await db.Departments.findOne({
      where: { id: id },
    });
    if (!checkDepartment) {
      return Promise.reject(
        Boom.badRequest("Department with this id is doesn't exist")
      );
    } else {
      await db.Departments.destroy({
        where: {
          id: id,
        },
      });
    }
    return Promise.resolve(true);
  } catch (err) {
    console.log([fileName, "deleteDepartmentHelper", "ERROR"], {
      info: `${err}`,
    });
    return Promise.reject(GeneralHelper.errorResponse(err));
  }
};

module.exports = {
  getDepartmentListHelper,
  createDepartmentHelper,
  deleteDepartmentHelper,
};
