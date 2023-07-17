const Joi = require('joi')

const id = Joi.number().integer()
const name = Joi.string().min(3).max(15)
const lastname = Joi.string().min(3).max(15)
const email = Joi.string().email()
const role = Joi.string().valid('admin', 'editor', 'auditor', 'invitado')
const password = Joi.string().pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{5,20}$/)

exports.CreateDTO = Joi.object({
  name: name.required(),
  lastname: lastname.required(),
  email: email.required(),
  role: role.required(),
  password: password.required()
})

exports.UpdateDTO = Joi.object({
  name,
  lastname,
  email,
  password,
  role
})

exports.GetByIdDTO = Joi.object({
  id: id.required()
})

exports.GetByEmailDTO = Joi.object({
  email: email.required()
})
