import boom from '@hapi/boom'
import sequelize from '../../../../store/sequelize.js'

const store = sequelize.models

export default class BrandService {
  // POST
  async create (payload) {
    const { name } = payload.toLowerCase()
    const [data, created] = await store.Brand.findOrCreate({
      where: { name },
      defaults: {
        ...payload
      }
    })
    if (!created) {
      throw boom.conflict('La marca ya se encuentra creada en la base de datos')
    }

    return data
  }

  // GetAll
  async getAll () {
    return await store.Brand.findAll()
  }

  // Get One By Id
  async getById (id) {
    const data = await store.Brand.findByPk(id)
    if (!data) {
      throw boom.notFound('Marca no Existe en la Base de Datos')
    }
    return data
  }

  // Get One By Name
  async getByName (name) {
    const data = await store.Brand.findOne({
      where: { name }
    })
    if (!data) {
      throw boom.notFound('Marca no Existe en la Base de Datos')
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
