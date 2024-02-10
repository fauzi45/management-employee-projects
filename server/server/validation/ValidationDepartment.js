const Joi = require("joi");
const Boom = require("boom");

const detailDepartmentValidation = (data) => {
    const schema = Joi.object({
      id: Joi.number().required(),
    });
  
    if (schema.validate(data).error) {
      throw Boom.badRequest(schema.validate(data).error);
    }
  };

  const createDepartmentValidation = (data) => {
    const schema = Joi.object({
      name: Joi.string().required(),
    });
  
    if (schema.validate(data).error) {
      throw Boom.badRequest(schema.validate(data).error);
    }
  }

  const updateDepartmentValidation = (data) => {
    const schema = Joi.object({
      name: Joi.string().required(),
    });
  
    if (schema.validate(data).error) {
      throw Boom.badRequest(schema.validate(data).error);
    }
  };

  const deleteDepartmentValidation = (data) => {
    const schema = Joi.object({
      id: Joi.number().required(),
    });
  
    if (schema.validate(data).error) {
      throw Boom.badRequest(schema.validate(data).error);
    }
  };
  

  module.exports = {
    detailDepartmentValidation,
    createDepartmentValidation,
    deleteDepartmentValidation,
    updateDepartmentValidation
  };