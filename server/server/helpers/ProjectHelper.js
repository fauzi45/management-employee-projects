const db = require("../../models");
const _ = require("lodash");
const GeneralHelper = require("./generalHelper");
const Boom = require("boom");
const fileName = "server/helpers/ProjectHelper.js";

const getProjectListHelper = async () => {
  try {
    const checkProject = await db.Projects.findAll();

    console.log(checkProject, "<<<<<server");
    if (_.isEmpty(checkProject)) {
      return Promise.reject(Boom.badRequest("Project data is empty"));
    }
    return Promise.resolve(checkProject);
  } catch (err) {
    console.log([fileName, "getProjectListHelper", "ERROR"], {
      info: `${err}`,
    });
    return Promise.reject(GeneralHelper.errorResponse(err));
  }
};



module.exports = {
  getProjectListHelper,
};
