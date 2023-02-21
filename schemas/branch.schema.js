const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string();

const createBranchSchema = Joi.object({
  name: name.required(),
});

const updateBranchSchema = Joi.object({
  name
})

const getBranchSchema = Joi.object({
  id: id.required(),
})

module.exports =  { createBranchSchema, updateBranchSchema, getBranchSchema };
