import { config } from '../../config/config.js'
import { createApp } from './app.js'

(async () => {
  const app = await createApp()
  app.listen(config.userPort, () => {
    console.log('Api Items escuchando en el puerto ', config.userPort)
  })
}
)()
