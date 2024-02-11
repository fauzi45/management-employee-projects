const Router = require("express").Router();

const EmployeeHelper = require("../helpers/EmployeeHelper");

const GeneralHelper = require("../helpers/generalHelper");

const ValidationEmployeeHelper = require("../validation/ValidationEmployee");


const fileName = "server/api/employee.js";

const listEmployee = async (req, res) => {
    try {
      const response = await EmployeeHelper.getEmployeeListHelper();
      return res.send({
        message: "Employee data received successfully",
        response,
      });
    } catch (err) {
      console.log([fileName, "listEmployee", "ERROR"], { info: `${err}` });
      return res.send(GeneralHelper.errorResponse(err));
    }
  };

  const detailEmployee = async (req, res) => {
    try {
      ValidationEmployeeHelper.detailEmployeeValidation(req.params);
      const { id } = req.params;
      const response = await EmployeeHelper.getEmployeeDetailHelper(id);
      return res.send({
        message: "Employee detail data received successfully",
        data: response,
      });
    } catch (err) {
      console.log([fileName, "detailEmployee", "ERROR"], { info: `${err}` });
      return res.send(GeneralHelper.errorResponse(err));
    }
  };

  const deleteEmployee = async (req, res) => {
    try {
      const { id } = req.params;
      const response = await EmployeeHelper.deleteEmployeeHelper(id);
      return res.status(200).send({
        message: "Employee data successfully deleted",
        response,
      });
    } catch (err) {
      console.log([fileName, "deleteEmployee", "ERROR"], { info: `${err}` });
      return res.send(GeneralHelper.errorResponse(err));
    }
  };

  Router.get("/employeeList", listEmployee);
  Router.get("/detail/:id", detailEmployee);
  Router.delete("/delete/:id", deleteEmployee);

  module.exports = Router;