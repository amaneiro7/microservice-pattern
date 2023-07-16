import Remote from './remote.js'
import config from '../config.js'

export default new Remote(config.cacheService.host, config.cacheService.port)
