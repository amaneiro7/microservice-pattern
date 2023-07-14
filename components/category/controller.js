import boom from '@hapi/boom'
import sequelize from '../../libs/sequelize.js'

const store = sequelize.models

export default class CategoryService {
  // POST
  async create (payload) {
    const { name } = payload.toLowerCase()
    const [data, created] = await store.Category.findOrCreate({
      where: { name },
      defaults: {
        ...payload
      }
    })
    if (!created) {
      throw boom.conflict('Categoria ya existe en la BD')
    }

    return data
  }

  // GetAll
  async getAll () {
    return await store.Category.findAll()
  }

  // Get One By Id
  async getById (id) {
    const data = await store.Category.findByPk(id)
    if (!data) {
      throw boom.notFound('Categoria ya existe en la BD')
    }
    return data
  }

  // Get One By Name
  async getByName (name) {
    const data = await store.Category.findOne({
      where: { name }
    })
    if (!data) {
      throw boom.notFound('Email no Existe')
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
