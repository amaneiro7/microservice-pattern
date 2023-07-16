import express from 'express'
import routerApi from './routes.js'

export const createApp = async () => {
  const app = express()
  app.use(express.json())
  routerApi(app)
  return app
}
