import { config } from '../../config/index.js'
import { createApp } from './app.js'

(async () => {
  const app = await createApp()
  app.listen(config.items.port, () => {
    console.log('Api Items escuchando en el puerto ', config.items.port)
  })
}
)()
