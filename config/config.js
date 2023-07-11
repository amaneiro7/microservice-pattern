const postgresDB = {
  dbUser: process.env.USER || 'appadmin',
  dbPassword: process.env.PASS || 'Man12345.',
  dbHost: process.env.HOST || 'localhost',
  dbName: process.env.NAME || 'my_inventory',
  dbPort: process.env.PORT || 5432
}

export const config = {
  postgresDB: {
    uri: process.env.URI || `postgres//${postgresDB.dbUser}:${postgresDB.dbPassword}@${postgresDB.dbHost}:${postgresDB.dbPort}/${postgresDB.dbName}`
  },
  port: process.env.PORT || 3000,
  host: process.env.HOST || 'http://localhost'
}
