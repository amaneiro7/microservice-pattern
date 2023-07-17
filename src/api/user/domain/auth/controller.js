const boom = require('@hapi/boom')
const jwt = require('jsonwebtoken')
const controller = require('../user/index.js')
const { config } = require('../../../../config/index.js')
const { compare, hash } = require('bcrypt')
const { createTransport } = require('nodemailer')
const { expirationDate } = require('../../../../utils/expirationDate.js')

class AuthController {
  async getUser ({ email, password }) {
    const user = await controller.getByEmail({ email, isAuthController: true })
    const isMatch = await compare(password, user.password)
    if (!isMatch) {
      throw boom.unauthorized()
    }
    delete user.dataValues.password
    return user
  }

  signToken (user) {
    const payload = {
      sub: user.id,
      role: user.role
    }
    const accessToken = jwt.sign(payload, config.jwtSecret)
    return {
      user,
      access_token: accessToken
    }
  }

  async sendRecovery ({ email }) {
    const user = await controller.getByEmail({ email, isAuthController: true })
    const payload = { sub: user.id }
    const token = jwt.sign(payload, config.jwtSecret, { expiresIn: expirationDate() })
    const link = `http://myfrontend.com/recovery?token=${token}`
    const id = user.id
    const changes = { recoveryToken: token }
    await controller.update({ id, changes })
    const mail = {
      from: config.smtpEmail,
      to: `${user.email}`,
      subject: 'Email para recuperar contraseña',
      html: `<b>Ingresa a este link => ${link}</b>`
    }
    return await this.sendMail({ mail })
  }

  async changePassword ({ token, newPassword }) {
    try {
      const payload = jwt.verify(token, config.jwtSecret)

      const id = payload.sub
      const user = await controller.getById({ id })
      if (user.recoveryToken !== token) {
        throw boom.unauthorized()
      }
      const passwordHash = await hash(newPassword, 10)
      const changes = { recoveryToken: null, password: passwordHash }
      await controller.update({ id, changes })
    } catch (error) {
      throw boom.unauthorized()
    }
  }

  async sendMail ({ mail }) {
    const transporter = createTransport({
      host: 'smtp.gmail.com',
      secure: true,
      port: 465,
      auth: {
        user: config.smtpEmail,
        pass: config.smtpPassword
      }
    })
    await transporter.sendMail(mail)
    return {
      message: 'mensaje enviado satisfactoriamente'
    }
  }
}
module.exports = AuthController
