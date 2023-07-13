import { Sequelize } from 'sequelize'
import { config } from '../config/config.js'
import SetupModels from '../db/models/index.js'

const URI = config.uri
const dialect = config.dialect

const sequelize = new Sequelize(URI, {
  dialect,
  logging: false
})

SetupModels(sequelize)

export default sequelize
