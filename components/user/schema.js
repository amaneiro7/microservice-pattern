import Joi from 'joi'

const id = Joi.number().integer()
const name = Joi.string().min(3).max(15)
const lastname = Joi.string().min(3).max(15)
const email = Joi.string().email()
const role = Joi.string().valid('Admin', 'Editor', 'Auditor', 'Guest')
const password = Joi.string().pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{5,20}$/)

export const CreateDTO = Joi.object({
  name: name.required(),
  lastname: lastname.required(),
  email: email.required(),
  role: role.required(),
  password: password.required()
})

export const UpdateDTO = Joi.object({
  name,
  lastname,
  email,
  password,
  role
})

export const GetDTO = Joi.object({
  id: id.required()
})
