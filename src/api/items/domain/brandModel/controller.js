import boom from '@hapi/boom'
import sequelize from '../../../../store/sequelize.js'

const store = sequelize.models

export default class BrandModelService {
  // POST
  async create (payload) {
    const { name } = payload.toLowerCase()
    const [data, created] = await store.BrandModel.findOrCreate({
      where: { name },
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
    return await store.BrandModel.findAll()
  }

  // Get One By Id
  async getById (id) {
    const data = await store.BrandModel.findByPk(id)
    if (!data) {
      throw boom.notFound('Usuario no existe')
    }
    return data
  }

  // Get One By Name
  async getByName (email) {
    const data = await store.BrandModel.findOne({
      where: { email }
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
