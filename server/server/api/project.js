const Router = require("express").Router();

const ProjectHelper = require("../helpers/ProjectHelper");

const GeneralHelper = require("../helpers/generalHelper");

const fileName = "server/api/departments.js";

const listProject = async (req, res) => {
  try {
    const response = await ProjectHelper.getProjectListHelper();
    return res.send({
      message: "Project data received successfully",
      response,
    });
  } catch (err) {
    console.log([fileName, "listProject", "ERROR"], { info: `${err}` });
    return res.send(GeneralHelper.errorResponse(err));
  }
};



Router.get("/projectList", listProject);

module.exports = Router;
