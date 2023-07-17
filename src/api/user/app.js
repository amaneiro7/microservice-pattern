const express = require('express')
const routerApi = require('./routes.js')
const { logErrors, errorHandler, boomErrorHandler, ormErrorHandler } = require('../../middlewares/error.handler.js')

const createApp = async () => {
  const app = express()
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))

  routerApi(app)

  app.use(ormErrorHandler)
  app.use(boomErrorHandler)
  app.use(errorHandler)
  app.use(logErrors)
  return app
}

module.exports = { createApp }
