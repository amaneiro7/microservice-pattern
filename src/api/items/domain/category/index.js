import Controller from './controller.js'
import Localstore from '../../../../store/postgres/postgres.store.js'
// import localCache from '../../../../store/redis'
import { config } from '../../../../config/index.js'

let store
let cache

if (config.remoteDB === false) {
  store = Localstore
}

export default new Controller(store, cache, 'category' )
