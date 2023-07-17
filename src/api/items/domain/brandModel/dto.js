const Joi = require('joi')

const id = Joi.number().integer()
const categoryId = Joi.number().integer()
const brandId = Joi.number().integer()
const name = Joi.string()

exports.CreateDTO = Joi.object({
  name: name.required(),
  categoryId: categoryId.required(),
  brandId: brandId.required()
})

exports.UpdateDTO = Joi.object({
  name,
  categoryId,
  brandId
})

exports.GetByIdDTO = Joi.object({
  id: id.required()
})

exports.GetByNameDTO = Joi.object({
  name: name.required()
})
