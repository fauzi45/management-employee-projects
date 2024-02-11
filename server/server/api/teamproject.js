const Router = require("express").Router();

const TeamProjectHelper = require("../helpers/TeamProjectHelper");

const GeneralHelper = require("../helpers/generalHelper");

const ValidationTeamProjectHelper = require("../validation/ValidationTeamProject");

const fileName = "server/api/projects.js";

const listTeamProject = async (req, res) => {
  try {
    const response = await TeamProjectHelper.getTeamProjectListHelper();
    return res.send({
      message: "Team Project data received successfully",
      response,
    });
  } catch (err) {
    console.log([fileName, "listProject", "ERROR"], { info: `${err}` });
    return res.send(GeneralHelper.errorResponse(err));
  }
};

const detailTeamProject = async (req, res) => {
  try {
    ValidationTeamProjectHelper.detailTeamProjectValidation(req.params);
    const { id } = req.params;
    const response = await TeamProjectHelper.getTeamProjectDetailHelper(id);
    return res.send({
      message: "Team Project detail data received successfully",
      data: response,
    });
  } catch (err) {
    console.log([fileName, "detailProject", "ERROR"], { info: `${err}` });
    return res.send(GeneralHelper.errorResponse(err));
  }
};

const createTeamProject = async (req, res) => {
  try {
    ValidationTeamProjectHelper.createTeamProjectValidation(req.body);
    const { employeeId, projectId, name, role } = req.body;
    const response = await TeamProjectHelper.createTeamProjectHelper({
      employeeId,
      projectId,
      name,
      role,
    });
    return res.send({
      message: "Team Project data successfully created",
      response,
    });
  } catch (err) {
    console.log([fileName, "createTeamProject", "ERROR"], { info: `${err}` });
    return res.send(GeneralHelper.errorResponse(err));
  }
};

const updateTeamProject = async (req, res) => {
  try {
    ValidationTeamProjectHelper.detailTeamProjectValidation(req.params);
    ValidationTeamProjectHelper.updateTeamProjectValidation(req.body);
    const { id } = req.params;
    const { employeeId, projectId, name, role } = req.body;
    const response = await TeamProjectHelper.updateTeamProjectHelper(
      id,
      employeeId,
      projectId,
      name,
      role
    );
    return res.send({
      message: "Team Project data successfully updated",
      data: response,
    });
  } catch (err) {
    console.log([fileName, "updateTeamProject", "ERROR"], { info: `${err}` });
    return res.send(GeneralHelper.errorResponse(err));
  }
};

const deleteTeamProject = async (req, res) => {
  try {
    ValidationTeamProjectHelper.deleteTeamProjectValidation(req.params);
    const { id } = req.params;
    const response = await TeamProjectHelper.deleteTeamProjectHelper(id);
    return res.status(200).send({
      message: "Team Project data successfully deleted",
      response,
    });
  } catch (err) {
    console.log([fileName, "deleteProject", "ERROR"], { info: `${err}` });
    return res.send(GeneralHelper.errorResponse(err));
  }
};

Router.get("/list", listTeamProject);
Router.post("/create", createTeamProject);
Router.get("/detail/:id", detailTeamProject);
Router.put("/update/:id", updateTeamProject);
Router.delete("/delete/:id", deleteTeamProject);

module.exports = Router;
