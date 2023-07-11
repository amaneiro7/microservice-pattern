import express from 'express'
import { config } from './config/config.js'

const app = express()

app.listen(config.port, () => console.log(`servidor iniciado en el puerto ${config.port}`))
