const Boom = require("boom");
const bcrypt = require("bcryptjs");
const _ = require("lodash");
const jwt = require("jsonwebtoken");

const db = require("../../models");
const GeneralHelper = require("./generalHelper");

const jwtSecretToken = process.env.JWT_SECRET_TOKEN || "super_strong_key";
const jwtExpiresIn = process.env.JWT_EXPIRES_IN || "24h";
const fileName = "server/helpers/authHelper.js";
const salt = bcrypt.genSaltSync(10);

// eslint-disable-next-line arrow-body-style
const __hashPassword = (password) => {
  return bcrypt.hashSync(password, salt);
};

// eslint-disable-next-line arrow-body-style
const __comparePassword = (payloadPass, dbPass) => {
  return bcrypt.compareSync(payloadPass, dbPass);
};

// eslint-disable-next-line arrow-body-style
const __generateToken = (data) => {
  return jwt.sign(data, jwtSecretToken, { expiresIn: jwtExpiresIn });
};

const registerUser = async (dataObject) => {
  const { name, email, password, position, departmentId } = dataObject;

  try {
    const checkEmailEmployee = await db.Employees.findOne({
      where: { email },
    });
    const checkDepartmentId = await db.Departments.findOne({
      where: { id: departmentId },
    });
    if (!_.isEmpty(checkEmailEmployee)) {
      return Promise.reject(Boom.badRequest("EMAIL_HAS_BEEN_USED"));
    }
    if (_.isEmpty(checkDepartmentId)) {
      return Promise.reject(
        Boom.badRequest("Department with this id is doesn't exist")
      );
    }

    const hashedPass = __hashPassword(password);
    await db.Employees.create({
      name,
      email,
      password: hashedPass,
      position,
      departmentId,
      isAdmin: false,
    });
    return Promise.resolve(true);
  } catch (err) {
    console.log([fileName, "registerUser", "ERROR"], { info: `${err}` });
    return Promise.reject(GeneralHelper.errorResponse(err));
  }
};

const login = async (dataObject) => {
  const { email, password } = dataObject;

  try {
    const employee = await db.Employees.findOne({
      where: { email },
    });
    if (_.isEmpty(employee)) {
      return Promise.reject(Boom.notFound("USER_NOT_FOUND"));
    }

    const isPassMatched = __comparePassword(password, employee.password);
    if (!isPassMatched) {
      return Promise.reject(Boom.badRequest("WRONG_CREDENTIALS"));
    }

    const token = __generateToken({
      employeeId: employee.id,
      isAdmin: employee.isAdmin,
    });

    return Promise.resolve({ token });
  } catch (err) {
    console.log([fileName, "login", "ERROR"], { info: `${err}` });
    return Promise.reject(GeneralHelper.errorResponse(err));
  }
};

const getUserHelper = async (dataEmployee) => {
  try {
    const checkUser = await db.Employees.findOne({
      where: {
        id: dataEmployee.employeeId,
      },
    });
    if (_.isEmpty(checkUser)) {
      return Promise.reject(Boom.notFound("USER_NOT_FOUND"));
    }
    return Promise.resolve(checkUser);
  } catch (err) {
    console.log([fileName, "getUser", "ERROR"], { info: `${err}` });
    return Promise.reject(GeneralHelper.errorResponse(err));
  }
};

const getMyTeamProjectHelper = async (dataEmployee) => {
  try {
    const checkTeamProject = await db.TeamProjects.findAll({
      include: [
        {
          model: db.Employees,
          as: "employee",
          include: [
            {
              model: db.Departments,
              as: "department",
              attributes: { exclude: ["createdAt", "updatedAt"] },
            },
          ],
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
        },
        {
          model: db.Projects,
          as: "project",
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
        },
      ],
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
      where: {
        employeeId: dataEmployee.employeeId,
      },
    });
    if (_.isEmpty(checkTeamProject)) {
      return { message: "YOUR TEAM PROJECT IS EMPTY" };
      }
    return Promise.resolve(checkTeamProject);
  } catch (err) {
    console.log([fileName, "getMyTeamProject", "ERROR"], { info: `${err}` });
    return Promise.reject(GeneralHelper.errorResponse(err));
  }
};

module.exports = {
  registerUser,
  login,
  getUserHelper,
  getMyTeamProjectHelper,
};
