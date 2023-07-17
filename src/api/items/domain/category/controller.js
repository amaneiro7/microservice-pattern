const ControllerModel = require('../../../../utils/functionController.js')
class CategoryController extends ControllerModel {
  constructor (InjectedStore, InjectedCache, TABLE) {
    super(InjectedStore, InjectedCache, TABLE)
  }
}

module.exports = CategoryController
