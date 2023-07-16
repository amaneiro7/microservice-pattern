import { Router } from 'express'
import brand from './domain/brand/router.js'
import brandModel from './domain//brandModel/router.js'
import item from './domain/item/router.js'
import category from './domain/category/router.js'
import { config } from '../../config/index.js'

const routes = (server) => {
  const router = Router()
  server.use(config.baseApiUrl, router)
  router.use('/category', category)
  router.use('/brand', brand)
  router.use('/model', brandModel)
  router.use('/item', item)
}

export default routes
