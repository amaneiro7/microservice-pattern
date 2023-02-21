const Joi = require('joi');

const id = Joi.number().integer();
const processor = Joi.string();
const hardDisk = Joi.string();
const memoryRam = Joi.string();
const memoryType = Joi.string();
const HDMI = Joi.boolean();
const DVI = Joi.boolean();


const createComputerSpecsSchema = Joi.object({
  processor: processor.required(),
  hardDisk: hardDisk.required(),
  memoryRam: memoryRam.required(),
  memoryType: memoryType.required(),
  HDMI: HDMI.required().default(false),
  DVI: DVI.required().default(false),
});

const updateComputerSpecsSchema = Joi.object({
  processor,
  hardDisk,
  memoryRam,
  memoryType,
  HDMI,
  DVI,
})

const getComputerSpecsSchema = Joi.object({
  id: id.required(),
})

module.exports = { createComputerSpecsSchema, updateComputerSpecsSchema, getComputerSpecsSchema };
