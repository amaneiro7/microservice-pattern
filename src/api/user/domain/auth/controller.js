import boom from '@hapi/boom'
import { compare, hash } from 'bcrypt'
import jwt from 'jsonwebtoken'
import { createTransport } from 'nodemailer'
import { config } from '../../../../config/index.js'
import Controller from '../user/controller.js'
import { expirationDate } from '../../../../utils/expirationDate.js'
const controller = new Controller()

export default class AuthController {
  async getUser ({ email, password }) {
    const user = await controller.getByEmail(email)
    if (!user) {
      throw boom.unauthorized()
    }
    const isMatch = await compare(password, user.password)
    if (!isMatch) {
      throw boom.unauthorized()
    }
    delete user.dataValues.password
    return user
  }

  signToken ({ user }) {
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
    const user = await controller.getByEmail({ email })
    if (!user) {
      throw boom.unauthorized()
    }
    const payload = { sub: user.id }
    const token = jwt.sign(payload, config.jwtSecret, { expiresIn: expirationDate() })
    const link = `http://myfrontend.com/recovery?token=${token}`
    await controller.update(user.id, { recoveryToken: token })
    const mail = {
      from: config.smtpEmail,
      to: `${user.email}`,
      subject: 'Email para recuperar contraseña',
      html: `<b>Ingresa a este link => ${link}</b>`
    }
    return await this.sendMail(mail)
  }

  async changePassword ({ token, newPassword }) {
    try {
      const payload = jwt.verify(token, config.jwtSecret)
      const user = await controller.findOne(payload.sub)
      if (user.recoveryToken !== token) {
        throw boom.unauthorized()
      }
      const passwordHash = await hash(newPassword, 10)
      await controller.update(user.id, { recoveryToken: null, password: passwordHash })
      return {
        message: 'Contraseña actulizada satisfactoriamente'
      }
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
