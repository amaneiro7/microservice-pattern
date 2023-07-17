const { Strategy } = require('passport-local')
const controller = require('../../domain/auth/index.js')

const LocalStrategy = new Strategy({
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

module.exports = { LocalStrategy }
