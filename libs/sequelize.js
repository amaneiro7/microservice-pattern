import { Sequelize } from 'sequelize'
import { config } from '../config/config'
import SetupModels from '../db/models'

const URI = config.postgresDB.uri

const sequelize = new Sequelize(URI, {
  dialect: 'postgres',
  logging: true
}, () => console.log('DB connected'))

SetupModels(sequelize)

export default sequelize
