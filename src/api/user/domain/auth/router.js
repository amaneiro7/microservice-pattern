const { Router } = require('express')
const controller = require('./index.js')
const passport = require('passport')
const response = require('../../../../middlewares/response.js')
const { LoginDTO, RecoveryDTO, ChangePasswordDTO } = require('./dto.js')
const validatorHandler = require('../../../../middlewares/validator.handler.js')

const router = Router()

// Routes
router.post('/login', validatorHandler(LoginDTO, 'body'), passport.authenticate('local', { session: false }), login)
router.post('/recovery', validatorHandler(RecoveryDTO, 'body'), recovery)
router.post('/change-password', validatorHandler(ChangePasswordDTO, 'body'), changePassword)

async function login (req, res, next) {
  const { user } = req.user
  controller.signToken({ user })
    .then(data => response.success(req, res, data))
    .catch(next)
}

function recovery (req, res, next) {
  const { email } = req.body
  controller.sendRecovery({ email })
    .then(data => response.success(req, res, data))
    .catch(next)
}

function changePassword (req, res, next) {
  const { token, newPassword } = req.body
  controller.changePassword({ token, newPassword })
    .then(data => response.updated(req, res, data))
    .catch(next)
}

module.exports = router
