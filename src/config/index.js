import 'dotenv/config'
const postgresDB = {
  user: process.env.POSTGRES_USER || 'appadmin',
  password: process.env.POSTGRES_PASS || 'Man12345.',
  host: process.env.POSTGRES_HOST || 'localhost',
  name: process.env.POSTGRES_NAME || 'my_inventory',
  port: process.env.POSTGRES_PORT || 5432
}

export const config = {
  env: process.env.NODE_ENV || 'development',
  isProd: process.env.NODE_ENV === 'production',
  isDev: process.env.NODE_ENV === 'development',
  baseApiUrl: '/api/v2',
  remoteDB: process.env.REMOTE_DB || false,
  port: process.env.PORT || 3000,
  user: {
    port: process.env.USER_PORT || 3001
  },
  items: {
    port: process.env.ITEMS_PORT || 3002
  },
  postgres: {
    uri: process.env.URI || `postgres://${postgresDB.user}:${postgresDB.password}@${postgresDB.host}:${postgresDB.port}/${postgresDB.name}`
  },
  redis: {
    host: process.env.REDIS_HOST || 'localhost',
    port: process.env.REDIS_PORT || 6379,
    password: process.env.REDIS_PASS || 'Man12345.'
  },
  postgresService: {
    host: process.env.MYSQL_SRV_HOST || 'localhost',
    port: process.env.MYSQL_SRV_PORT || 3003
  },
  cacheService: {
    host: process.env.CACHE_SRV_HOST || 'localhost',
    port: process.env.CACHE_SRV_PORT || 3004
  },
  dialect: process.env.DIALECT || 'postgres',
  apiKey: process.env.API_KEY,
  jwtSecret: process.env.JWT_SECRET,
  smtpEmail: process.env.SMTP_EMAIL,
  smtpPassword: process.env.SMTP_PASSWORD
}
