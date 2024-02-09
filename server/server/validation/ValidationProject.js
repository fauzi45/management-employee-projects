const Joi = require("joi");
const Boom = require("boom");

const detailProjectValidation = (data) => {
    const schema = Joi.object({
      id: Joi.number().required(),
    });
  
    if (schema.validate(data).error) {
      throw Boom.badRequest(schema.validate(data).error);
    }
  };

  const createProjectValidation = (data) => {
    const schema = Joi.object({
      name: Joi.string().required(),
      description: Joi.string().required(),
      startDate: Joi.date().required(),
      endDate: Joi.date().required(),
    });
  
    if (schema.validate(data).error) {
      throw Boom.badRequest(schema.validate(data).error);
    }
  }

  const updateProjectValidation = (data) => {
    const schema = Joi.object({
      name: Joi.string().required(),
      description: Joi.string().required(),
      startDate: Joi.date().required(),
      endDate: Joi.date().required(),
      status: Joi.boolean().required(),
    });
  
    if (schema.validate(data).error) {
      throw Boom.badRequest(schema.validate(data).error);
    }
  };

  const deleteProjectValidation = (data) => {
    const schema = Joi.object({
      id: Joi.number().required(),
    });
  
    if (schema.validate(data).error) {
      throw Boom.badRequest(schema.validate(data).error);
    }
  };
  

  module.exports = {
    detailProjectValidation,
    createProjectValidation,
    deleteProjectValidation,
    updateProjectValidation
  };