const Router = require("express").Router();

const Middleware = require("../middlewares/authMiddleware");
const Validation = require("../helpers/validationHelper");
const AuthHelper = require("../helpers/authHelper");
const GeneralHelper = require("../helpers/generalHelper");
const { decryptData } = require("../../utils/decryptionHelper");
const fileName = "server/api/auth.js";
const register = async (request, reply) => {
  try {
    const { name, email, password, position, departmentId } = request.body;
    const decryptName = decryptData(name);
    const decryptEmail = decryptData(email);
    const decryptPassword = decryptData(password);
    const decryptPosition = decryptData(position);
    const decryptDeparmentId = decryptData(departmentId);
    Validation.registerValidation({
      name: decryptName,
      email: decryptEmail,
      password: decryptPassword,
      position: decryptPosition,
      departmentId: decryptDeparmentId,
    });

    const response = await AuthHelper.registerUser({
      name: decryptName,
      email: decryptEmail,
      password: decryptPassword,
      position: decryptPosition,
      departmentId: decryptDeparmentId,
    });
    return reply.send(response);
  } catch (err) {
    console.log([fileName, "register", "ERROR"], { info: `${err}` });
    return reply.send(GeneralHelper.errorResponse(err));
  }
};

const login = async (request, reply) => {
  try {
    const { email, password } = request.body;
    const decryptEmail = decryptData(email);
    const decryptPassword = decryptData(password);
    Validation.loginValidation({
      email: decryptEmail,
      password: decryptPassword,
    });
    const response = await AuthHelper.login({
      email: decryptEmail,
      password: decryptPassword,
    });

    return reply.send(response);
  } catch (err) {
    console.log([fileName, "login", "ERROR"], { info: `${err}` });
    return reply.send(GeneralHelper.errorResponse(err));
  }
};

// eslint-disable-next-line arrow-body-style
const hello = async (request, reply) => {
  return reply.send("HELLO");
};

const getUser = async (request, reply) => {
  try {
    const dataEmployee = request.header.employeeToken;
    const employee = await AuthHelper.getUserHelper(dataEmployee);
    return reply.send(employee);
  }catch (err) {
    console.log([fileName, "getUser", "ERROR"], { info: `${err}` });
    return reply.send(GeneralHelper.errorResponse(err));
  }
}

const getMyTeamProject = async (request, reply) => {
  try {
    const dataEmployee = request.header.employeeToken;
    const teamProject = await AuthHelper.getMyTeamProjectHelper(dataEmployee);
    return reply.send(teamProject);
  }catch (err) {
    console.log([fileName, "getMyTeamProject", "ERROR"], { info: `${err}` });
    return reply.send(GeneralHelper.errorResponse(err));
  }
}

const getDetailMyTeamProject = async (request, reply) => {
  try {
    const dataEmployee = request.header.employeeToken;
    const { id } = request.params;
    const teamProject = await AuthHelper.getDetailMyTeamProjectHelper(dataEmployee,id);
    return reply.send(teamProject);
  }catch (err) {
    console.log([fileName, "getMyTeamProject", "ERROR"], { info: `${err}` });
    return reply.send(GeneralHelper.errorResponse(err));
  }
}

Router.post("/register", register);
Router.post("/login", login);
Router.get("/hello", Middleware.validateToken, hello);
Router.get("/getUser", Middleware.validateToken, getUser);
Router.get("/getMyTeamProject", Middleware.validateToken, getMyTeamProject);
Router.get("/getMyTeamProject/detail/:id", Middleware.validateToken, getDetailMyTeamProject);

module.exports = Router;
