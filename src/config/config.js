import 'dotenv/config'
const DB = {
  dbUser: process.env.DB_USER || 'appadmin',
  dbPassword: process.env.DB_PASSWORD || 'Man12345.',
  dbHost: process.env.DB_HOST || 'localhost',
  dbName: process.env.DB_NAME || 'my_inventory',
  dbPort: process.env.DB_PORT || 5432
}

export const config = {
  env: process.env.NODE_ENV || 'development',
  isProd: process.env.NODE_ENV === 'production',
  isDev: process.env.NODE_ENV === 'development',
  uri: process.env.URI || `postgres://${DB.dbUser}:${DB.dbPassword}@${DB.dbHost}:${DB.dbPort}/${DB.dbName}`,
  dialect: process.env.DIALECT || 'postgres',
  port: process.env.PORT || 3000,
  userPort: process.env.USER_PORT || 3001,
  itemsPort: process.env.ITEMS_PORT || 3002,
  host: process.env.HOST || 'http://localhost',
  apiKey: process.env.API_KEY,
  jwtSecret: process.env.JWT_SECRET,
  smtpEmail: process.env.SMTP_EMAIL,
  smtpPassword: process.env.SMTP_PASSWORD
}
