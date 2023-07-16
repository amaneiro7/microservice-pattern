import { Sequelize } from 'sequelize'
import { config } from '../config/config.js'
import SetupModels from './models/index.js'

const options = {
  dialect: config.dialect,
  logging: config.isDev ? console.log : false
}

if (config.isProd) {
  options.dialectOptions = {
    ssl: {
      rejectUnauthorized: false
    }
  }
}

const sequelize = new Sequelize(config.uri, options)

SetupModels(sequelize)

export default sequelize
