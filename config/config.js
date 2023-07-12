const DB = {
  dbUser: process.env.DB_USER || 'appadmin',
  dbPassword: process.env.DB_PASSWORD || 'Man12345.',
  dbHost: process.env.DB_HOST || 'localhost',
  dbName: process.env.DB_NAME || 'my_inventory',
  dbPort: process.env.DB_PORT || 5432
}

export const config = {
  uri: process.env.URI || `postgres://${DB.dbUser}:${DB.dbPassword}@${DB.dbHost}:${DB.dbPort}/${DB.dbName}`,
  dialect: process.env.DIALECT || 'postgres',
  port: process.env.PORT || 3000,
  host: process.env.HOST || 'http://localhost'
}
