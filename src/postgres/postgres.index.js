import { config } from '../config/index.js'
import { createApp } from './app.js'

const app = createApp()
app.listen(config.postgresService.port, () => {
  console.log('Servicio de Postgres escuchando en el puerto ', config.postgresService.port)
})
