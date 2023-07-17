const ControllerModel = require('../../../../utils/functionController.js')
const { hash } = require('bcrypt')
class UserController extends ControllerModel {
  constructor (InjectedStore, InjectedCache, TABLE) {
    super(InjectedStore, InjectedCache, TABLE)
  }

  async create ({ payload }) {
    const hashPassword = await hash(payload.password, 10)
    const data = {
      ...payload,
      password: hashPassword
    }
    const rta = await this.store.create({ table: this.TABLE, payload: data, uniqueEntry: payload.email })
    delete rta.dataValues.password
    return rta
  }

  async getByID ({ id }) {
    const data = await this.store.getById({ table: this.TABLE, id })
    delete data.dataValues.password
    return data
  }

  async getByEmail ({ email }) {
    const data = await this.store.getByName({ table: this.TABLE, name: email })
    delete data.dataValues.password
    return data
  }
}
module.exports = UserController
