import boom from '@hapi/boom'
import store from '../../libs/sequelize.js'

export default class CategoryServive {
  // POST
  async create (payload) {
    const { email } = payload.toLowerCase()
    const [data, created] = await store.User.findOrCreate({
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
    return await store.User.findAll()
  }

  // Get One
  async getById (id) {
    const data = await store.User.findbyPk(id)
    if (!data) {
      throw boom.notFound('Usuario no existe')
    }
    return data
  }

  async getByName (email) {
    const data = await store.User.findOne({
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
