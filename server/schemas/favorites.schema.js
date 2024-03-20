const Joi = require("joi");

const saveSchema = Joi.object({
  userEmail: Joi.string().required(),
  imageUrl: Joi.string().required(),
  imageTitle: Joi.string().required(),
});

module.exports = { saveSchema };
