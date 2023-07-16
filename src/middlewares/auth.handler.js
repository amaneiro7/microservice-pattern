import boom from '@hapi/boom'
import { config } from '../config/config.js'
import { roles } from '../utils/roles.js'

export const checkApiKey = (req, res, next) => {
  const apiKey = req.headers.api
  if (apiKey === config.apiKey) {
    next()
  } else {
    next(boom.unauthorized())
  }
}

export const checkAdminRole = (req, res, next) => {
  const user = req.user
  if (user.role === roles.admin) {
    next()
  } else {
    next(boom.unauthorized(`Tu rol no es ${roles.admin}`))
  }
}

export const checkRoles = (...roles) => (req, res, next) => {
  const user = req.user
  if (roles.includes(user.role)) {
    next()
  } else {
    next(boom.unauthorized('your role is not allow'))
  }
}
