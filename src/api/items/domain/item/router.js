import { Router } from 'express'
import controller from './index.js'
import { CreateDTO, GetByIdDTO, GetByActvioDTO, GetBySerialDTO, UpdateDTO } from './dto.js'
import createRoute from '../../../../utils/functionNetwork.js'
import validatorHandler from '../../../../middlewares/validator.handler.js'
import response from '../../../../middlewares/response.js'

const router = Router()

createRoute(router, { CreateDTO, GetByIdDTO, UpdateDTO }, controller)
router.get('/serial/:serial', validatorHandler(GetBySerialDTO, 'params'), getBySerial)
router.get('/activo/:activo', validatorHandler(GetByActvioDTO, 'params'), getByActivo)

function getBySerial (req, res, next) {
  const { serial } = req.params
  controller.getBySerial({ name: serial })
    .then(data => response.success({ req, res, data }))
    .catch(next)
}

function getByActivo (req, res, next) {
  const { activo } = req.params
  controller.getByActivo({ name: activo })
    .then(data => response.success({ req, res, data }))
    .catch(next)
}

export default router
