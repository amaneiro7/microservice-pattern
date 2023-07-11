import Joi from 'joi'

const id = Joi.number().integer()
const name = Joi.string().min(3).max(15)
const lastname = Joi.string().min(3).max(15)
const email = Joi.string().email()
const password = Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{6,20}$'))

export const CreateUserDTO = Joi.object({
  id: id.required(),
  name: name.required(),
  lastname: lastname.required(),
  email: email.required(),
  password: password.required()
})

export const UpdateUserDTO = Joi.object({
  name,
  lastname,
  email,
  password
})

export const GetUserDTO = Joi.object({
  id: id.required()
})
