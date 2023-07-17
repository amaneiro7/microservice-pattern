const Controller = require('./controller.js')
const Localstore = require('../../../../store/postgres/postgres.store.js')
// const localCache = require ('../../../../store/redis')
const { config } = require('../../../../config/index.js')

let store
let cache

if (config.remoteDB === false) {
  store = Localstore
}

module.exports = new Controller(store, cache, 'brand')
