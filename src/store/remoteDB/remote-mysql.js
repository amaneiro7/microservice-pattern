const Remote = require('./remote.js')
const config = require('../config.js')

module.exports = new Remote(config.mysqlService.host, config.mysqlService.port)
