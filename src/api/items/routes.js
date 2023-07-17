const { Router } = require('express')
const category = require('./domain/category/router.js')
const brand = require('./domain/brand/router.js')
const brandModel = require('./domain//brandModel/router.js')
const item = require('./domain/item/router.js')
const { config } = require('../../config/index.js')

const routes = (server) => {
  const router = Router()
  server.use(config.baseApiUrl, router)
  router.use('/category', category)
  router.use('/brand', brand)
  router.use('/model', brandModel)
  router.use('/item', item)
}

module.exports = routes
