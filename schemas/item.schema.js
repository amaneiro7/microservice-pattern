const Joi = require('joi');

const id = Joi.number().integer();
const serial = Joi.string();
const activo = Joi.string();


const createItemSchema = Joi.object({
  serial: serial,
  activo: activo,
});

const updateItemSchema = Joi.object({
  serial,
  activo
});

const getItemSchema = Joi.object({
  id: id.required(),
});

module.exports = { createItemSchema, updateItemSchema, getItemSchema };
