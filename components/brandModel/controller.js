import boom from '@hapi/boom'
import sequelize from '../../libs/sequelize.js'

const store = sequelize.models

export default class CategoryService {
  // POST
  async create (payload) {
    const { email } = payload.toLowerCase()
    const [data, created] = await store.Category.findOrCreate({
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
    return await store.Category.findAll()
  }

  // Get One By Id
  async getById (id) {
    const data = await store.Category.findbyPk(id)
    if (!data) {
      throw boom.notFound('Usuario no existe')
    }
    return data
  }

  // Get One By Name
  async getByName (email) {
    const data = await store.Category.findOne({
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
