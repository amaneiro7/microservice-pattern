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
    console.log(rta)
    delete rta.dataValues.password
    console.log(rta)
    return rta
  }

  async getByID ({ id }) {
    const data = await this.store.getById({ table: this.TABLE, id })
    delete data.dataValues.password
    return data
  }

  async getByEmail ({ email }) {
    const data = await this.store.getByName({ table: this.TABLE, field: 'email', value: email })
    delete data.dataValues.password
    delete data.dataValues.recoveryToken
    return data
  }
}
module.exports = UserController
