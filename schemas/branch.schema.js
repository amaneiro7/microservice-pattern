import { Joi } from "joi";

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

export { createBranchSchema, updateBranchSchema, getBranchSchema };
