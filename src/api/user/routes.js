import { Router } from 'express'
import user from './domain/user/router.js'
import auth from './domain/auth/router.js'
import swaggerUI from 'swagger-ui-express'
import swaggerDoc from './swagger.json' assert {type: 'json'}
import { config } from '../../config/config.js'

const routes = (server) => {
  const router = Router()
  server.use(config.baseApiUrl, router)  
  router.use('/user', user)
  router.use('/auth', auth)
  router.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDoc))
}

export default routes
