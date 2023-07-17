const { Router } = require('express')
const controller = require('./index.js')
const dto = require('./dto.js')
const createRoute = require('../../../../utils/functionNetwork.js')
const validatorHandler = require('../../../../middlewares/validator.handler.js')
const response = require('../../../../middlewares/response.js')

const router = Router()

createRoute(router, dto, controller)
router.get('/serial/:serial', validatorHandler(dto.GetBySerialDTO, 'params'), getBySerial)
router.get('/activo/:activo', validatorHandler(dto.GetByActvioDTO, 'params'), getByActivo)

function getBySerial (req, res, next) {
  const { serial } = req.params
  controller.getBySerial({ serial })
    .then(data => response.success({ req, res, data }))
    .catch(next)
}

function getByActivo (req, res, next) {
  const { activo } = req.params
  controller.getByActivo({ activo })
    .then(data => response.success({ req, res, data }))
    .catch(next)
}

module.exports = router
