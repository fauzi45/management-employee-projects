const db = require("../../models");
const _ = require("lodash");
const GeneralHelper = require("./generalHelper");
const Boom = require("boom");
const fileName = "server/helpers/ProjectHelper.js";

const getProjectListHelper = async () => {
  try {
    const checkProject = await db.Projects.findAll();

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

const getProjectDetailHelper = async (id) => {
  try {
    const response = await db.Projects.findOne({
      where: { id: id },
    });
    if (!response) {
      return Promise.reject(
        Boom.badRequest("Project with this id is doesn't exist")
      );
    }
    return Promise.resolve(response);
  } catch (error) {
    console.log([fileName, "getProjectDetailHelper", "ERROR"], {
      info: `${err}`,
    });
    return Promise.reject(GeneralHelper.errorResponse(err));
  }
};

const createProjectHelper = async (dataObject) => {
  const { name, description, startDate, endDate } = dataObject;
  try {
    await db.Projects.create({
      name,
      description,
      startDate,
      endDate,
      status: false,
    });
    return Promise.resolve(true);
  } catch (err) {
    console.log([fileName, "createProjectHelper", "ERROR"], {
      info: `${err}`,
    });
    return Promise.reject(GeneralHelper.errorResponse(err));
  }
};

const deleteProjectHelper = async (id) => {
  try {
    const checkProject = await db.Projects.findOne({
      where: { id: id },
    });
    if (!checkProject) {
      return Promise.reject(
        Boom.badRequest("Project with this id is doesn't exist")
      );
    } else {
      await db.Projects.destroy({
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
  getProjectListHelper,
  getProjectDetailHelper,
  createProjectHelper,
  deleteProjectHelper,
};
