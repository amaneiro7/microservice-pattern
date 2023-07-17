const DefaultStore = require('../store/dummy/dummy.store.js')

class ControllerModel {
  constructor (InjectedStore, InjectedCache, TABLE) {
    this.defaultStore = new DefaultStore()
    this.TABLE = TABLE
    this.store = new InjectedStore() || this.defaultStore
    this.cache = InjectedCache || this.defaultStore
  }

  // POST
  async create ({ payload }) {
    return await this.store.create({ table: this.TABLE, payload, uniqueEntry: payload.name })
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
    return await this.store.getByName({ table: this.TABLE, value: name })
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

module.exports = ControllerModel
