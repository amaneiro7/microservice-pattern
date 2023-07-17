const { Sequelize } = require('sequelize')
const { config } = require('../../config/index.js')
const SetupModels = require('./models/index.js')

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

const sequelize = new Sequelize(config.postgres.uri, options)

SetupModels(sequelize)

module.exports = sequelize
