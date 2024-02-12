const Router = require("express").Router();

const ProjectHelper = require("../helpers/ProjectHelper");

const GeneralHelper = require("../helpers/generalHelper");

const ValidationProjectHelper = require("../validation/ValidationProject");

const uploadMedia = require("../middlewares/uploadMedia");

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
    ValidationProjectHelper.detailProjectValidation(req.params);
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
    if (req?.fileValidationError)
      return res.status(400).json({ message: req.fileValidationError.message });

    if (!req?.files?.imageUrl)
      return res.status(400).json({ message: "File is required" });
    ValidationProjectHelper.createProjectValidation(req.body);
    const response = await ProjectHelper.createProjectHelper({
      name: req.body.name,
      description: req.body.description,
      startDate: req.body.startDate,
      endDate: req.body.endDate,
      image: req.files.imageUrl[0],
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
    ValidationProjectHelper.detailProjectValidation(req.params);
    ValidationProjectHelper.updateProjectValidation(req.body);
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

Router.get("/projectList", listProject);
Router.get("/detail/:id", detailProject);
Router.post(
  "/create",
  uploadMedia.fields([{ name: "imageUrl", maxCount: 1 }]),
  createProject
);
Router.put("/update/:id", updateProject);
Router.delete("/delete/:id", deleteProject);

module.exports = Router;
