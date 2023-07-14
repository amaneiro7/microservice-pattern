import user from '../components/user/router.js'
import category from '../components/category/router.js'
import brand from '../components/brand/router.js'
import brandModel from '../components/brandModel/router.js'
import item from '../components/item/router.js'

const routes = (server) => {
  server.use('/user', user)
  server.use('/category', category)
  server.use('/brand', brand)
  server.use('/model', brandModel)
  server.use('/item', item)
}

export default routes
