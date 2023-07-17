const { config } = require('../config/index.js')
const { createApp } = require('./app.js')

const app = createApp()
app.listen(config.postgresService.port, () => {
  console.log('Servicio de Postgres escuchando en el puerto ', config.postgresService.port)
})
