const sequelize = require('../libs/sequelize.js')

const validateSequelizeConnection = () => sequelize.authenticate()
  .then(() => console.log('Connection has been established successfully.'))
  .catch(error => console.error('Unable to connect to the database:', error))

module.exports = {
  validateSequelizeConnection
}
