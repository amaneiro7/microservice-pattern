import { Joi } from "joi";

const id = Joi.number().integer();
const name = Joi.string().min(3).max(15);
const serial = Joi.string();
const activo = Joi.string();


const createCategorySchema = Joi.object({
  name: name.required(),
  serial: serial,
  activo: activo,
});

const updateCategorySchema = Joi.object({
  name,
  serial,
  activo
});

const getCategorySchema = Joi.object({
  id: id.required(),
});

export { createCategorySchema, updateCategorySchema, getCategorySchema };
