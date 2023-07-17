const { Router } = require('express')
const controller = require('./index.js')
const dto = require('./dto.js')
const createRoute = require('../../../../utils/functionNetwork.js')
const validatorHandler = require('../../../../middlewares/validator.handler.js')
const response = require('../../../../middlewares/response.js')

const router = Router()

createRoute(router, dto, controller)
router.get('/email/:email', validatorHandler(dto.GetByEmailDTO, 'params'), getByEmail)

function getByEmail (req, res, next) {
  const { email } = req.params
  controller.getByEmail({ email })
    .then(data => response.success({ req, res, data }))
    .catch(next)
}

module.exports = router
