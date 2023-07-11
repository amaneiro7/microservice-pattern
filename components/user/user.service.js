import boom from '@hapi/boom'
import { models } from '../../libs/sequelize.js'

export default class UserServive {
  // POST
  async create (data) {
    return await models.User.create(data)
  }

  // GetAll
  async getAll () {
    return await models.User.findAll()
  }

  // Get One
  async getOne (id) {
    const data = await models.User.findbyPk(id)
    if (!data) {
      throw boom.notFound('Usuario no existe')
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
