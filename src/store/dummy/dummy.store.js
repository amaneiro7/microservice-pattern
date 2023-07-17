const Store = require('../store.js')

class DefaultStore extends Store {
  constructor () {
    super()
    if (!DefaultStore.instance) {
      DefaultStore.instance = this
    }
  }
}

module.exports = DefaultStore
