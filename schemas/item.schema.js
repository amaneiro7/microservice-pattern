const Joi = require('joi');

const id = Joi.number().integer();
const serial = Joi.string();
const activo = Joi.string();
const categoryId = Joi.number().integer();
const branchId = Joi.number().integer();


const createItemSchema = Joi.object({
  serial: serial,
  activo: activo,
  categoryId: categoryId.required(),
  branchId: branchId.required()
});

const updateItemSchema = Joi.object({
  serial,
  activo,
  categoryId,
  branchId
});

const getItemSchema = Joi.object({
  id: id.required(),
});

module.exports = { createItemSchema, updateItemSchema, getItemSchema };
