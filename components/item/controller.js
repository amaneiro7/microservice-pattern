import boom from '@hapi/boom'
import sequelize from '../../libs/sequelize.js'

const store = sequelize.models

export default class ItemService {
  // POST
  async create (payload) {
    const { email } = payload.toLowerCase()
    const [data, created] = await store.Item.findOrCreate({
      where: { email },
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
      throw boom.notFound('Usuario no existe')
    }
    return data
  }

  // Get One By Name
  async getByName (email) {
    const data = await store.Item.findOne({
      where: { email }
    })
    if (!data) {
      throw boom.notFound('Email no Existe')
    }
    return data
  }

  // PATCH
  async update (id, changes) {
    const data = await this.findOne(id)
    return await data.update(changes)
  }

  // DELETE
  async delete (id) {
    const data = await this.findOne(id)
    await data.destroy()
    return { id }
  }
}
