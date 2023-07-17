const { config } = require('../config/index.js')
const { createApp } = require('./app.js')

const app = createApp()
app.listen(config.redisPort, () => {
  console.log('Servicio de cache escuchando en el puerto ', config.redisPort)
})
