import defaultStore from '../../../../store/dummy/dummy.store.js'

export default class CategoryService {
  constructor ({ InjectedStore, InjectedCache }) {
    this.TABLE = 'category'
    this.store = new InjectedStore() || defaultStore
    this.cache = InjectedCache || defaultStore
  }

  // POST
  async create ({ payload }) {
    return await this.store.create({ table: this.TABLE, payload })
  }

  // GetAll
  async getAll () {
    //   let data = this.cache.getAll({ table: this.TABLE })

    //   if (!data) {
    //     console.log('No estaba en cache, Buscado en DB')
    //     data = await this.store.getAll({ table: this.TABLE })
    //     this.cache.update({ table: this.TABLE, data })
    //   } else {
    //     console.log('Nos traemos datos de cache')
    //   }
    //   return data
    return await this.store.getAll({ table: this.TABLE })
  }

  // Get One By Id
  async getById ({ id }) {
    return await this.store.getById({ table: this.TABLE, id })
  }

  // Get One By Name
  async getByName ({ name }) {
    return await this.store.getById({ table: this.TABLE, name })
  }

  // PATCH
  async update ({ id, changes }) {
    return await this.store.update({ table: this.TABLE, id, changes })
  }

  // DELETE
  async remove ({ id }) {
    return await this.store.remove({ table: this.TABLE, id })
  }
}
