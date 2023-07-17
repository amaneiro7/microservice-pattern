const express = require('express')
const routerApi = require('./routes.js')

const createApp = async () => {
  const app = express()
  app.use(express.json())
  routerApi(app)
  return app
}

module.exports = {
  createApp
}
