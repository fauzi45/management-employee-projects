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

module.exports = {
    getEmployeeListHelper,
  };