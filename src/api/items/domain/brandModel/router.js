const { Router } = require('express')
const controller = require('./index.js')
const dto = require('./dto.js')
const createRoute = require('../../../../utils/functionNetwork.js')

const router = Router()

createRoute(router, dto, controller)

module.exports = router
