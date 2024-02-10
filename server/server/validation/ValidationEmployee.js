const Joi = require("joi");
const Boom = require("boom");

const detailEmployeeValidation = (data) => {
    const schema = Joi.object({
      id: Joi.number().required(),
    });
  
    if (schema.validate(data).error) {
      throw Boom.badRequest(schema.validate(data).error);
    }
  };

  module.exports = {
    detailEmployeeValidation,
  };