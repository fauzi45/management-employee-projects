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

const createProject = async (req, res) => {
  try {
    const { name, description, startDate, endDate } = req.body;
    const response = await ProjectHelper.createProjectHelper({
      name,
      description,
      startDate,
      endDate,
    });
    return res.send(response);
  } catch (err) {
    console.log([fileName, "createProject", "ERROR"], { info: `${err}` });
    return res.send(GeneralHelper.errorResponse(err));
  }
};

Router.get("/projectList", listProject);
Router.post("/create", createProject);

module.exports = Router;
