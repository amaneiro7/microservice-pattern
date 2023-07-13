import sequelize from '../libs/sequelize.js'

export const validateSequelizeConnection = () => sequelize.authenticate()
  .then(() => console.log('Connection has been established successfully.'))
  .catch(error => console.error('Unable to connect to the database:', error))
