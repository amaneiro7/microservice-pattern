import { Router } from 'express'
import validatorHandler from '../../middlewares/validator.handler.js'
import Controller from './controller.js'
import { CreateDTO, GetDTO, UpdateDTO } from './schema.js'
import response from '../../network/response.js'

const router = Router()
const controller = new Controller()

// Routes
router.post('/', validatorHandler(CreateDTO, 'body'), create)
router.get('/', get)
router.get('/:id', validatorHandler(GetDTO, 'parmas'), getById)
router.get('/:name', validatorHandler(GetDTO, 'parmas'), getByName)
router.put('/:id', validatorHandler(GetDTO, 'params'), validatorHandler(UpdateDTO, 'body'), update)
router.delete('/', validatorHandler(GetDTO, 'params'), deleteData)

function create (req, res, next) {
  controller.create(req.body)
    .then(data => response.created({ req, res, data }))
    .catch(next)
}
function get (req, res, next) {
  controller.getAll()
    .then(data => response.success({ req, res, data }))
    .catch(next)
}
function getById (req, res, next) {
  controller.getById(req.params.id)
    .then(data => res.status(200).json(data))
    .catch(next)
}
function getByName (req, res, next) {
  controller.getByName(req.params.name)
    .then(data => res.status(201).json(data))
    .catch(next)
}
function update (req, res, next) {
  controller.update(req.params.id, req.body)
    .then(data => res.status(201).json(data))
    .catch(next)
}
function deleteData (req, res, next) {
  controller.delete(req.params.id)
    .then(data => res.status(201).json(data))
    .catch(next)
}

export default router
