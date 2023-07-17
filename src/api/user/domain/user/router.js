const { Router } = require('express')
const controller = require('./index.js')
const { CreateDTO, GetByIdDTO, GetByNameDTO, UpdateDTO } = require('./dto.js')
const createRoute = require('../../../../utils/functionNetwork.js')

const router = Router()

createRoute(router, { CreateDTO, GetByIdDTO, GetByNameDTO, UpdateDTO }, controller)

module.exports = router
