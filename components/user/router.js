import { Router } from 'express'
import validatorHandler from '../../middlewares/validator.handler.js'
import Controller from './controller.js'
import { CreateDTO, GetDTO, UpdateDTO } from './schema.js'

const router = Router()
const controller = new Controller()

// Routes
router.post('/', validatorHandler(CreateDTO, 'body'), create)
router.get('/', getAll)
router.get('/:id', validatorHandler(GetDTO, 'parmas'), getOne)
router.put('/', validatorHandler(GetDTO, 'params'), validatorHandler(UpdateDTO, 'body'), update)
router.delete('/', validatorHandler(GetDTO, 'params'), deleteData)

function create (req, res, next) {
  controller.create(req.body)
    .then(data => res.status(201).json(data))
    .catch(next)
}
function getAll (req, res, next) {
  controller.getAll()
    .then(data => res.status(201).json(data))
    .catch(next)
}
function getOne (req, res, next) {
  controller.getOne(req.params.id)
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
