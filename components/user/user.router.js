import { Router } from 'express'
import validatorHandler from '../../middlewares/validator.handler.js'
import Service from './user.service.js'
import { CreateUserDTO, GetUserDTO, UpdateUserDTO } from './user.schema.js'

const router = Router()
const service = new Service()

// Routes
router.post('/', validatorHandler(CreateUserDTO, 'body'), create)
router.get('/', getAll)
router.get('/:id', validatorHandler(GetUserDTO, 'parmas'), getOne)
router.put('/', validatorHandler(GetUserDTO, 'params'), validatorHandler(UpdateUserDTO, 'body'), update)
router.delete('/', validatorHandler(GetUserDTO, 'params'), deleteData)

function create (req, res, next) {
  service.create(req.body)
    .then(data => res.status(201).json(data))
    .catch(next)
}
function getAll (req, res, next) {
  service.getAll()
    .then(data => res.status(201).json(data))
    .catch(next)
}
function getOne (req, res, next) {
  service.getOne(req.params.id)
    .then(data => res.status(201).json(data))
    .catch(next)
}
function update (req, res, next) {
  service.update(req.params.id, req.body)
    .then(data => res.status(201).json(data))
    .catch(next)
}
function deleteData (req, res, next) {
  service.delete(req.params.id)
    .then(data => res.status(201).json(data))
    .catch(next)
}

export default router
