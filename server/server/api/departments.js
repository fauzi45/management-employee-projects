const Router = require("express").Router();

const DepartmentHelper = require("../helpers/DepartmentHelper");

const GeneralHelper = require("../helpers/generalHelper");

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
    const { name } = req.body;
    const response = await DepartmentHelper.createDepartmentHelper(name);
    return res.send(response);
  } catch (err) {
    console.log([fileName, "createDepartment", "ERROR"], { info: `${err}` });
    return res.send(GeneralHelper.errorResponse(err));
  }
};

Router.get("/departmentList", listDepartment);
Router.post("/create", createDepartment);

module.exports = Router;
