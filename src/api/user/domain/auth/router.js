import { Router } from 'express'
import controller from './index.js'
import passport from 'passport'
import response from '../../../../middlewares/response.js'
import { LoginDTO, RecoveryDTO, ChangePasswordDTO } from './dto.js'
import validatorHandler from '../../../../middlewares/validator.handler.js'

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

export default router
