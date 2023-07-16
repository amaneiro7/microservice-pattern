import { Store } from '../store.js'

export default class DummyStore extends Store {
  constructor () {
    super()
    if (!DummyStore.instance) {
      DummyStore.instance = this
    }
  }
}
