import { Router } from 'express'
import validatorHandler from '../../middlewares/validator.handler.js'
import Service from './category.service.js'
import { CreateDTO, GetDTO, UpdateDTO } from './category.schema.js'

const router = Router()
const service = new Service()

// Routes
router.post('/', validatorHandler(CreateDTO, 'body'), create)
router.get('/', getAll)
router.get('/:id', validatorHandler(GetDTO, 'parmas'), getById)
router.get('/:name', validatorHandler(GetDTO, 'parmas'), getByName)
router.put('/', validatorHandler(GetDTO, 'params'), validatorHandler(UpdateDTO, 'body'), update)
router.delete('/', validatorHandler(GetDTO, 'params'), deleteData)

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
function getById (req, res, next) {
  service.getOne(req.params.id)
    .then(data => res.status(201).json(data))
    .catch(next)
}
function getByName (req, res, next) {
  service.getOne(req.params.name)
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
