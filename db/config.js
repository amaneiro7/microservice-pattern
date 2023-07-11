import { config } from '../config/config'

const URI = config.postgresDB.uri

export default {
  development: {
    url: URI,
    dialect: 'postgres'
  },
  production: {
    url: URI,
    dialect: 'postgres'
  }
}
