import sequelize from './sequelize.js'
import boom from '@hapi/boom'
import { capitalizeFirstLetter } from '../../utils/capitalizeFirstLetter.js'

export default class PostgresStore {
  constructor () {
    if (!PostgresStore.instance) {
      PostgresStore.instance = this
      sequelize.authenticate()
        .then(() => console.log('Connection has been established successfully.'))
        .catch(error => console.error('Unable to connect to the database:', error))
    }
    this.store = sequelize.models
  }

  async create ({ payload, table }) {
    const modelName = capitalizeFirstLetter(table)
    const { name } = payload.toLowerCase()
    const [data, created] = await this.store[modelName].findOrCreate({
      where: { name },
      defaults: {
        ...payload
      }
    })
    if (!created) {
      throw boom.conflict(`${modelName} is already exist in DB`)
    }

    return data
  }

  // GetAll
  async getAll ({ table }) {
    const modelName = capitalizeFirstLetter(table)
    return await this.store[modelName].findAll()
  }

  // Get One By Id
  async getById ({ id, table }) {
    const modelName = capitalizeFirstLetter(table)
    const data = await this.store[modelName].findByPk(id)
    if (!data) {
      throw boom.notFound(`${modelName} does not exist`)
    }
    return data
  }

  // Get One By Name
  async getByName ({ name, table }) {
    const modelName = capitalizeFirstLetter(table)
    const data = await this.store[modelName].findOne({
      where: { name }
    })
    if (!data) {
      throw boom.notFound(`${modelName} does not exist`)
    }
    return data
  }

  // PATCH
  async update ({ table, id, changes }) {
    const data = await this.getById({ table, id })
    return await data.update(changes)
  }

  // DELETE
  async remove ({ table, id }) {
    const data = await this.getById({ table, id })
    await data.destroy()
    return { id }
  }
}

// export default {
//   create,
//   getAll,
//   getById,
//   getByName,
//   update,
//   remove
// }
