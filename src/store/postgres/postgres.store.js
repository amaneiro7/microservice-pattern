import { Op } from 'sequelize'
import sequelize from './sequelize.js'
import boom from '@hapi/boom'
import { capitalizeFirstLetter } from '../../utils/capitalizeFirstLetter.js'
import { formatStringPayload } from '../../utils/formatStringPayload.js'

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

  async create ({ payload, table, uniqueEntry }) {
    const modelName = capitalizeFirstLetter(table)
    let name = uniqueEntry
    name = formatStringPayload()
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

  async createItem ({ table, payload }) {
    const modelName = capitalizeFirstLetter(table)
    let { serial, activo } = payload
    serial = formatStringPayload()
    activo = formatStringPayload()
    const [data, created] = await this.store[modelName].findOrCreate({
      where: {
        [Op.or]: [
          { serial },
          { serial: { [Op.eq]: null } },
          { serial: { [Op.eq]: '' } }
        ],
        [Op.or]: [
          { activo },
          { activo: { [Op.eq]: null } },
          { activo: { [Op.eq]: '' } }
        ]
      },
      defaults: {
        ...payload
      }
    })
    if (!created) {
      throw boom.conflict('El Serial y/o el Activo ya se encuentra registrado')
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
