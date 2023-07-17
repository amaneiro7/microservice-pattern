const boom = require('@hapi/boom')
const { config } = require('../config/config.js')
const { roles } = require('../utils/roles.js')

const checkApiKey = (req, res, next) => {
  const apiKey = req.headers.api
  if (apiKey === config.apiKey) {
    next()
  } else {
    next(boom.unauthorized())
  }
}

const checkAdminRole = (req, res, next) => {
  const user = req.user
  if (user.role === roles.admin) {
    next()
  } else {
    next(boom.unauthorized(`Tu rol no es ${roles.admin}`))
  }
}

const checkRoles = (...roles) => (req, res, next) => {
  const user = req.user
  if (roles.includes(user.role)) {
    next()
  } else {
    next(boom.unauthorized('your role is not allow'))
  }
}

module.export = {
  checkApiKey, checkAdminRole, checkRoles
}
