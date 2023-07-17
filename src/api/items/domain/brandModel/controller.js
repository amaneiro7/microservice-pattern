const ControllerModel = require('../../../../utils/functionController.js')
class BrandModelController extends ControllerModel {
  constructor (InjectedStore, InjectedCache, TABLE) {
    super(InjectedStore, InjectedCache, TABLE)
  }
}

module.exports = BrandModelController
