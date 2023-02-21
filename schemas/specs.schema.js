import { Joi } from "joi";

const id = Joi.number().integer();
const processor = Joi.string();
const hardDrive = Joi.string();
const memoryRam = Joi.string();
const memoryType = Joi.string();
const HDMI = Joi.boolean();
const DVI = Joi.boolean();
const pulgadas = Joi.string();


const createSpecsSchema = Joi.object({
  processor,
  hardDrive,
  memoryRam,
  memoryType,
  HDMI,
  DVI,
  pulgadas
});

const updateSpecsSchema = Joi.object({
  processor,
  hardDrive,
  memoryRam,
  memoryType,
  HDMI,
  DVI,
  pulgadas
})

const getSpecsSchema = Joi.object({
  id: id.required(),
})

export { createSpecsSchema, updateSpecsSchema, getSpecsSchema };
