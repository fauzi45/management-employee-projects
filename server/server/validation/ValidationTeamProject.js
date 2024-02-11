const Joi = require("joi");
const Boom = require("boom");

const detailTeamProjectValidation = (data) => {
  const schema = Joi.object({
    id: Joi.number().required(),
  });

  if (schema.validate(data).error) {
    throw Boom.badRequest(schema.validate(data).error);
  }
};

const createTeamProjectValidation = (data) => {
  const schema = Joi.object({
    employeeId: Joi.number().required(),
    projectId: Joi.number().required(),
    name: Joi.string().required(),
    role: Joi.string().required(),
  });

  if (schema.validate(data).error) {
    throw Boom.badRequest(schema.validate(data).error);
  }
};

const updateTeamProjectValidation = (data) => {
  const schema = Joi.object({
    employeeId: Joi.number().required(),
    projectId: Joi.number().required(),
    name: Joi.string().required(),
    role: Joi.string().required(),
  });

  if (schema.validate(data).error) {
    throw Boom.badRequest(schema.validate(data).error);
  }
};

const deleteTeamProjectValidation = (data) => {
  const schema = Joi.object({
    id: Joi.number().required(),
  });

  if (schema.validate(data).error) {
    throw Boom.badRequest(schema.validate(data).error);
  }
};

module.exports = {
  detailTeamProjectValidation,
  createTeamProjectValidation,
  deleteTeamProjectValidation,
  updateTeamProjectValidation
};
