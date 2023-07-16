import express from "express";
import user from './user/router.js'
import swaggerUI from 'swagger-ui-express'
import swaggerDoc from './swagger.json' assert {type: 'json'}
import { config } from "../../config/config.js";

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/user', user)
app.use('/api/auth', auth)
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDoc))

app.listen(config.api.port, () => {
  console.log('Api user escuchando en el puerto ', config.userPort)
})