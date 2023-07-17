const { config } = require('../../config/index.js')

module.exports = {
  development: {
    url: config.postgres.uri,
    dialect: config.dialect
  },
  production: {
    url: config.postgres.uri,
    dialect: config.dialect,
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false
      }
    }
  }
}
