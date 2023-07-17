const Remote = require('./remote.js')
const config = require('../config.js')

module.exports = new Remote(config.cacheService.host, config.cacheService.port)
