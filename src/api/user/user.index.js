import express from "express";
import user from './domain/user/router.js'
import auth from './domain/auth/router.js'
import swaggerUI from 'swagger-ui-express'
import swaggerDoc from './swagger.json' assert {type: 'json'}
import { config } from "../../config/config.js";

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/v2/user', user)
app.use('/api/v2/auth', auth)
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDoc))

app.listen(config.userPort, () => {
  console.log('Api user escuchando en el puerto ', config.userPort)
})