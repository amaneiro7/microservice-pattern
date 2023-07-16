export class Store {
  constructor () {
    this.db = []
  }

  async createTable (table) {
    if (this.db[table]) return true
    this.db[table] = []
    return false
  }

  async create (table, body) {
    this.createTable(table)
    this.db[table].push(body)
  }

  async getAll (table) {
    this.createTable(table)
    return this.db[table]
  }

  async getById (table, id) {
    this.createTable(table)
    return this.db[table].findIndex(data => data.id === id)
  }

  async getByName (table, name) {
    this.createTable(table)
    return this.db[table].filter(data => data.name === name)
  }

  async update (table, id, changes) {
    this.createTable(table)
    const indexToUpdate = await this.getById(table, id)
    return Object.assign(this.db[table][indexToUpdate], changes)
  }

  async remove (table, id) {
    this.createTable(table)
    const indexToUpdate = await this.getById(table, id)
    delete this.db[table][indexToUpdate]
  }
}
