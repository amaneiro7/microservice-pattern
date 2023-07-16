import { config } from '../config/config.js'

export default {
  development: {
    url: config.dbUrl,
    dialect: config.dialect
  },
  production: {
    url: config.dbUrl,
    dialect: config.dialect,
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false
      }
    }
  }
}
