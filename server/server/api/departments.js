const Router = require("express").Router();

const DepartmentHelper = require("../helpers/DepartmentHelper");

const GeneralHelper = require("../helpers/generalHelper");

const ValidationDepartmentHelper = require("../validation/ValidationDepartment");

const fileName = "server/api/departments.js";

const listDepartment = async (req, res) => {
  try {
    const response = await DepartmentHelper.getDepartmentListHelper();
    return res.send({
      message: "Department data received successfully",
      response,
    });
  } catch (err) {
    console.log([fileName, "listDepartment", "ERROR"], { info: `${err}` });
    return res.send(GeneralHelper.errorResponse(err));
  }
};

const createDepartment = async (req, res) => {
  try {
    ValidationDepartmentHelper.createDepartmentValidation(req.body);
    const {name} = req.body;
    const response = await DepartmentHelper.createDepartmentHelper({
      name: name,
    });
    return res.send(response);
  } catch (err) {
    console.log([fileName, "createDepartment", "ERROR"], { info: `${err}` });
    return res.send(GeneralHelper.errorResponse(err));
  }
};

const detailDepartment = async (req, res) => {
  try {
    ValidationDepartmentHelper.detailDepartmentValidation(req.params);
    const { id } = req.params;
    const response = await DepartmentHelper.getDepartmentDetailHelper(id);
    return res.send({
      message: "Department detail data received successfully",
      data: response,
    });
  } catch (err) {
    console.log([fileName, "createDepartment", "ERROR"], { info: `${err}` });
    return res.send(GeneralHelper.errorResponse(err));
  }
};

const updateDepartment = async (req, res) => {
  try {
    ValidationDepartmentHelper.detailDepartmentValidation(req.params);
    ValidationDepartmentHelper.updateDepartmentValidation(req.body);
    const { id } = req.params;
    const { name } = req.body;
    const response = await DepartmentHelper.updateDepartmentHelper(id, name);
    return res.send({
      message: "Department data successfully updated",
      data: response,
    });
  } catch (err) {
    console.log([fileName, "updateDepartment", "ERROR"], { info: `${err}` });
    return res.send(GeneralHelper.errorResponse(err));
  }
};

const deleteDepartment = async (req, res) => {
  try {
    ValidationDepartmentHelper.deleteDepartmentValidation(req.params);
    const { id } = req.params;
    const response = await DepartmentHelper.deleteDepartmentHelper(id);
    return res.status(200).send({
      message: "Department data successfully deleted",
      response,
    });
  } catch (err) {
    console.log([fileName, "deleteDepartment", "ERROR"], { info: `${err}` });
    return res.send(GeneralHelper.errorResponse(err));
  }
};

Router.get("/departmentList", listDepartment);
Router.post(
  "/create",
  createDepartment
);
Router.get("/detail/:id", detailDepartment);
Router.put("/update/:id", updateDepartment);
Router.delete("/delete/:id", deleteDepartment);

module.exports = Router;
