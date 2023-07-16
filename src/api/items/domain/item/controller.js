import boom from '@hapi/boom'
import { Op } from 'sequelize'
import sequelize from '../../../../store/sequelize.js'

const store = sequelize.models

export default class ItemService {
  // POST
  async create (payload) {
    const { serial, activo } = payload.toLowerCase()
    const [data, created] = await store.Item.findOrCreate({
      where: {
        [Op.or]: [
          { serial: { [Op.eq]: null } },
          { serial: { [Op.eq]: '' } }
        ],
        [Op.or]: [
          { activo: { [Op.eq]: null } },
          { activo: { [Op.eq]: '' } }
        ]
      },
      defaults: {
        ...payload
      }
    })
    if (!created) {
      throw boom.conflict('Email ya se encuentra registrado')
    }

    return data
  }

  // GetAll
  async getAll () {
    return await store.Item.findAll()
  }

  // Get One By Id
  async getById (id) {
    const data = await store.Item.findByPk(id)
    if (!data) {
      throw boom.notFound('Item no existe')
    }
    return data
  }

  // Get One By Name
  async getBySerial (serial) {
    const data = await store.Item.findOne({
      where: { serial }
    })
    if (!data) {
      throw boom.notFound('Serial no Existe')
    }
    return data
  }

  async getByActivo (activo) {
    const data = await store.Item.findOne({
      where: { activo }
    })
    if (!data) {
      throw boom.notFound('Activo no Existe')
    }
    return data
  }

  // PATCH
  async update (id, changes) {
    const data = await this.getById(id)
    return await data.update(changes)
  }

  // DELETE
  async delete (id) {
    const data = await this.getById(id)
    await data.destroy()
    return { id }
  }
}
