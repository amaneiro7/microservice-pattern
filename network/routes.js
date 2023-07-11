import user from '../components/user/user.router.js'
const routes = (server) => {
  server.use('user', user)
}

export default routes
