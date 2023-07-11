import Joi from 'joi'

const id = Joi.number().integer()
const name = Joi.string().min(3).max(15)

export const CreateDTO = Joi.object({
  name: name.required()
})

export const UpdateDTO = Joi.object({
  name
})

export const GetDTO = Joi.object({
  id: id.required()
})
