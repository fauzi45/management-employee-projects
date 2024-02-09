const Router = require("express").Router();

const ProjectHelper = require("../helpers/ProjectHelper");

const GeneralHelper = require("../helpers/generalHelper");

const fileName = "server/api/projects.js";

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

const detailProject = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await ProjectHelper.getProjectDetailHelper(id);
    return res.send({
      message: "Project detail data received successfully",
      data: response,
    });
  } catch (err) {
    console.log([fileName, "detailProject", "ERROR"], { info: `${err}` });
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
    return res.send({
      message: "Project data successfully created",
      response,
    });
  } catch (err) {
    console.log([fileName, "createProject", "ERROR"], { info: `${err}` });
    return res.send(GeneralHelper.errorResponse(err));
  }
};

const updateProject = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, startDate, endDate, status } = req.body;
    const response = await ProjectHelper.updateProjectHelper(
      id,
      name,
      description,
      startDate,
      endDate,
      status
    );
    return res.send({
      message: "Project data successfully updated",
      data: response,
    });
  } catch (err) {
    console.log([fileName, "updateProject", "ERROR"], { info: `${err}` });
    return res.send(GeneralHelper.errorResponse(err));
  }
};

const deleteProject = async (req, res) => {
  try {
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

Router.get("/projectList", listProject);
Router.get("/detail/:id", detailProject);
Router.post("/create", createProject);
Router.put("/update/:id", updateProject);
Router.delete("/delete/:id", deleteProject);

module.exports = Router;
