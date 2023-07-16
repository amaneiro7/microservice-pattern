import { config } from '../config/index.js'
import { createApp } from './app.js'

const app = createApp()
app.listen(config.redisPort, () => {
  console.log('Servicio de cache escuchando en el puerto ', config.redisPort)
})
