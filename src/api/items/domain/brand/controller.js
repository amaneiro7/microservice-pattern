const ControllerModel = require('../../../../utils/functionController.js')
class BrandController extends ControllerModel {
  constructor (InjectedStore, InjectedCache, TABLE) {
    super(InjectedStore, InjectedCache, TABLE)
  }
}

module.exports = BrandController
