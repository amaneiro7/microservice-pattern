const { config } = require('../../config/')
const { createApp } = require('./app');

(async () => {
  const app = await createApp()
  app.listen(config.items.port, () => {
    console.log('Api Items escuchando en el puerto ', config.items.port)
  })
}
)()
