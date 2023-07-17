const Joi = require('joi')

const id = Joi.number().integer()
const serial = Joi.string().allow(null, '').optional()
const activo = Joi.string().allow(null, '').optional()
const status = Joi.boolean()
const obsolete = Joi.boolean()
const categoryId = Joi.number().integer()
const brandId = Joi.number().integer()
const modelId = Joi.number().integer()

exports.CreateDTO = Joi.object({
  serial,
  activo,
  status: status.default(true),
  obsolete: status.default(true),
  categoryId: categoryId.required(),
  brandId: brandId.required(),
  modelId: modelId.required()
}).or('serial', 'activo')

exports.UpdateDTO = Joi.object({
  serial,
  activo,
  status,
  obsolete,
  categoryId,
  brandId,
  modelId
})

exports.GetByIdDTO = Joi.object({
  id: id.required()
})

exports.GetBySerialDTO = Joi.object({
  serial: serial.required()
})

exports.GetByActvioDTO = Joi.object({
  activo: activo.required()
})
