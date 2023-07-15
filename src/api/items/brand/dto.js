import Joi from 'joi'

const id = Joi.number().integer()
const name = Joi.string()

export const CreateDTO = Joi.object({
  name: name.required()
})

export const UpdateDTO = Joi.object({
  name
})

export const GetDTO = Joi.object({
  id: id.required()
})
