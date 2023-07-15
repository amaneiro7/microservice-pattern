import express from 'express'
import router from './network/routes.js'
import { config } from './config/config.js'
import { validateSequelizeConnection } from './middlewares/sequelizeConnection.js'

const app = express()
router(app)

app.listen(config.port, () => {
  console.log(`servidor iniciado en el puerto ${config.port}`)
  validateSequelizeConnection()
})
