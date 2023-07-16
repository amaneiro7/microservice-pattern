import Remote from './remote.js'
import config from '../config.js'

export default new Remote(config.mysqlService.host, config.mysqlService.port)
