import { config } from '../../config/index.js'
import { createApp } from './app.js'

(async () => {
  const app = await createApp()
  app.listen(config.user.port, () => {
    console.log('Api User escuchando en el puerto ', config.user.port)
  })
}
)()
