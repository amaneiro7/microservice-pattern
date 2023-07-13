import user from '../components/user/router.js'
import category from '../components/category/router.js'

const routes = (server) => {
  server.use('/user', user)
  server.use('/category', category)
}

export default routes
