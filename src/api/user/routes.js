const { Router } = require('express')
const user = require('./domain/user/router.js')
const auth = require('./domain/auth/router.js')
const swaggerUI = require('swagger-ui-express')
const swaggerDoc = require('./swagger.json')
const { config } = require('../../config/index.js')

const routes = (server) => {
  const router = Router()
  server.use(config.baseApiUrl, router)
  router.use('/user', user)
  router.use('/auth', auth)
  router.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDoc))
}

module.exports = routes
