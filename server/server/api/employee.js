const Router = require("express").Router();

const EmployeeHelper = require("../helpers/EmployeeHelper");

const GeneralHelper = require("../helpers/generalHelper");

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

  Router.get("/employeeList", listEmployee);

  module.exports = Router;