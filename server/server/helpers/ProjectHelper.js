const db = require("../../models");
const _ = require("lodash");
const GeneralHelper = require("./generalHelper");
const Boom = require("boom");
const fileName = "server/helpers/ProjectHelper.js";
const {
  uploadToCloudinary,
  cloudinaryDeleteImg,
} = require("../../utils/cloudinary");

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
  const { name, description, startDate, endDate, image } = dataObject;
  try {
    const imageResult = await uploadToCloudinary(image, "image");
    await db.Projects.create({
      name,
      description,
      startDate,
      endDate,
      status: false,
      imageUrl: imageResult?.url,
    });
    return Promise.resolve(true);
  } catch (err) {
    console.log([fileName, "createProjectHelper", "ERROR"], {
      info: `${err}`,
    });
    return Promise.reject(GeneralHelper.errorResponse(err));
  }
};

const updateProjectHelper = async (
  id,
  name,
  description,
  startDate,
  endDate,
  status
) => {
  try {
    const checkProject = await db.Projects.findOne({
      where: { id: id },
    });
    if (!checkProject) {
      return Promise.reject(
        Boom.badRequest("Project with this id is doesn't exist")
      );
    } else {
      await db.Projects.update(
        {
          name: name ? name : checkProject.dataValues.name,
          description: description
            ? description
            : checkProject.dataValues.description,
          startDate: startDate ? startDate : checkProject.dataValues.startDate,
          endDate: endDate ? endDate : checkProject.dataValues.endDate,
          status: status ? status : checkProject.dataValues.status,
        },
        { where: { id: id } }
      );
    }
    return Promise.resolve(true);
  } catch (error) {
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
  updateProjectHelper,
  deleteProjectHelper,
};
