const express = require('express')
const router = require('./network/routes.js')
const { config } = require('./config/config.js')
const { validateSequelizeConnection } = require('./middlewares/sequelizeConnection.js')

const app = express()
router(app)

app.listen(config.port, () => {
  console.log(`servidor iniciado en el puerto ${config.port}`)
  validateSequelizeConnection()
})
