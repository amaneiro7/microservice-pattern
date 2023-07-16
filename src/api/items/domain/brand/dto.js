import Joi from 'joi'

const id = Joi.number().integer()
const name = Joi.string().trim()

export const CreateDTO = Joi.object({
  name: name.required()
})

export const UpdateDTO = Joi.object({
  name
})

export const GetByIdDTO = Joi.object({
  id: id.required()
})

export const GetByNameDTO = Joi.object({
  name: name.required()
})
