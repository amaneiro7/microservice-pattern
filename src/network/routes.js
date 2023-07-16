import user from '../components/user/router.js'
import category from '../components/category/router.js'
import brand from '../components/brand/router.js'
import brandModel from '../components/brandModel/router.js'
import item from '../components/item/router.js'
import { Router } from 'express'

const routes = (server) => {
  const router = Router()
  server.use('/api/v2', router)
  router.use('/user', user)
  router.use('/category', category)
  router.use('/brand', brand)
  router.use('/model', brandModel)
  router.use('/item', item)
}

export default routes
