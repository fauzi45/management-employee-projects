const db = require("../../models");

const createDepartmentHelper = async (name) => {
  try {
    const response = await db.Departments.create({
      name: name,
    });
    return Promise.resolve(response);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createDepartmentHelper,
};
