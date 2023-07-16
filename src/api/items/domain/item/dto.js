import Joi from 'joi'

const id = Joi.number().integer()
const serial = Joi.string().allow(null, '').optional()
const activo = Joi.string().allow(null, '').optional()
const status = Joi.boolean()
const obsolete = Joi.boolean()
const categoryId = Joi.number().integer()
const brandId = Joi.number().integer()
const modelId = Joi.number().integer()

export const CreateDTO = Joi.object({
  serial,
  activo,
  status: status.default(true),
  obsolete: status.default(true),
  categoryId: categoryId.required(),
  brandId: brandId.required(),
  modelId: modelId.required()
}).or('serial', 'activo')

export const UpdateDTO = Joi.object({
  serial,
  activo,
  status,
  obsolete,
  categoryId,
  brandId,
  modelId
})

export const GetByIdDTO = Joi.object({
  id: id.required()
})

export const GetBySerialDTO = Joi.object({
  serial: serial.required()
})

export const GetByActvioDTO = Joi.object({
  activo: activo.required()
})
