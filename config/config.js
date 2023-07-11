const DB = {
  dbUser: process.env.USER || 'appadmin',
  dbPassword: process.env.PASS || 'Man12345.',
  dbHost: process.env.HOST || 'localhost',
  dbName: process.env.NAME || 'my_inventory',
  dbPort: process.env.PORT || 5432
}

export const config = {
  uri: process.env.URI || `postgres://${DB.dbUser}:${DB.dbPassword}@${DB.dbHost}:${DB.dbPort}/${DB.dbName}`,
  dialect: process.env.DIALECT || 'postgres',
  port: process.env.PORT || 3000,
  host: process.env.HOST || 'http://localhost'
}
