const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(3).max(15);

const createCategorySchema = Joi.object({
  name: name.required(),
});

const updateCategorySchema = Joi.object({
  name,
});

const getCategorySchema = Joi.object({
  name: name.required(),
});

module.exports = { createCategorySchema, updateCategorySchema, getCategorySchema };
