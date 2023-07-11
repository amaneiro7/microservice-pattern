import Joi from 'joi'

const id = Joi.number().integer()
const name = Joi.string().min(3).max(15)
const lastname = Joi.string().min(3).max(15)
const email = Joi.string().email()
const role = Joi.string().valid('Admin', 'Editor', '', 'guest')
const password = Joi.string().pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{5,20}$/)

export const CreateUserDTO = Joi.object({
  id: id.required(),
  name: name.required(),
  lastname: lastname.required(),
  email: email.required(),
  role: role.required(),
  password: password.required()
})

export const UpdateUserDTO = Joi.object({
  name,
  lastname,
  email,
  password,
  role
})

export const GetUserDTO = Joi.object({
  id: id.required()
})
