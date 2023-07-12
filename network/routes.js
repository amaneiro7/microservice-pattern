import user from '../components/user/user.router.js'
import category from '../components/category/category.router.js'

const routes = (server) => {
  server.use('/user', user)
  server.use('/category', category)
}

export default routes
