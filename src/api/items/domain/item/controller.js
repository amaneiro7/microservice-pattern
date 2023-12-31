const ControllerModel = require('../../../../utils/functionController.js')
class ItemController extends ControllerModel {
  constructor (InjectedStore, InjectedCache, TABLE) {
    super(InjectedStore, InjectedCache, TABLE)
  }

  async create ({ payload }) {
    return await this.store.createItem({ table: this.TABLE, payload })
  }

  async getBySerial ({ serial }) {
    return await this.store.getByName({ table: this.TABLE, field: 'serial', value: serial })
  }

  async getByActivo ({ activo }) {
    return await this.store.getByName({ table: this.TABLE, field: 'activo', value: activo })
  }
}
module.exports = ItemController
