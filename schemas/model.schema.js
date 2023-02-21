const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string();
const branchId = Joi.number().integer();

const createModelSchema = Joi.object({
  name: name.required(),
  branchId: branchId.required()
});

const updateModelSchema = Joi.object({
  name,
  branchId
})

const getModelSchema = Joi.object({
  id: id.required(),
})

module.exports =  { createModelSchema, updateModelSchema, getModelSchema };
