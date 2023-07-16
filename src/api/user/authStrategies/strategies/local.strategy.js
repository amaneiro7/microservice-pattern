import { Strategy } from 'passport-local'
import Controller from '../../domain/auth/controller.js'
const controller = new Controller()

export const LocalStrategy = new Strategy({
  usernameField: 'email',
  passwordField: 'password'
},
async (email, password, done) => {
  try {
    const user = await controller.getUser({ email, password })
    done(null, user)
  } catch (error) {
    done(error, false)
  }
}
)
