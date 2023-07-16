import express from 'express'
import routerApi from './routes.js'
import { logErrors, errorHandler, boomErrorHandler, ormErrorHandler } from '../../middlewares/error.handler.js'

export const createApp = async () => {
  const app = express()
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))

  routerApi(app)

  app.use(logErrors)
  app.use(ormErrorHandler)
  app.use(boomErrorHandler)
  app.use(errorHandler)
  return app
}
