const Joi = require('joi')

const id = Joi.number().integer()
const name = Joi.string().trim()

exports.CreateDTO = Joi.object({
  name: name.required()
})

exports.UpdateDTO = Joi.object({
  name
})

exports.GetByIdDTO = Joi.object({
  id: id.required()
})

exports.GetByNameDTO = Joi.object({
  name: name.required()
})
