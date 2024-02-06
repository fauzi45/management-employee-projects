const Router = require("express").Router();

const DepartmentHelper = require("../helpers/DepartmentHelper");

const createDepartment = async (req, res) => {
    try {
      const { name } = req.body;
      const response = await DepartmentHelper.createDepartmentHelper(name);
      return res
        .status(200)
        .send({
          message: "Department data successfully created",
          data: response,
        });
    } catch (err) {
      res.status(400).send({
        message: "Department data failed to be created",
        data: err.message,
      });
    }
  };

  Router.post("/create", createDepartment);

  module.exports = Router;