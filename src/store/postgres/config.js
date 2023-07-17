const { config } = require('../../config/')

module.exports = {
  development: {
    url: config.postgres.uri,
    dialect: 'postgres'
  },
  production: {
    url: config.postgres.uri,
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false
      }
    }
  }
}
