const { createApp } = require('./app.js')
const { config } = require('../../config/index.js');

(async () => {
  const app = await createApp()
  app.listen(config.user.port, () => {
    console.log('Api User escuchando en el puerto ', config.user.port)
  })
})()
