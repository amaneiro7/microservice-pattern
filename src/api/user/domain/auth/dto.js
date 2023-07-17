const Joi = require('joi')

const email = Joi.string().trim().email()
const token = Joi.string().trim().token()
const password = Joi.string().trim().pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{5,20}$/)

const user = Joi.object({
  email: email.required(),
  password: password.required()
})

const LoginDTO = Joi.object({
  user: user.required()
})

const RecoveryDTO = Joi.object({
  email: email.required()
})

const ChangePasswordDTO = Joi.object({
  token: token.required(),
  newPassword: password.required()
})

module.exports = {
  LoginDTO, RecoveryDTO, ChangePasswordDTO
}
