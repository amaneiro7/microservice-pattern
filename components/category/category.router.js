import { Router } from 'express'
import validatorHandler from '../../middlewares/validator.handler.js'
import CategoryService from './category.service.js'
import { CreateDTO, GetDTO, UpdateDTO } from './category.schema.js'
import response from '../../network/response.js'

const router = Router()
const service = new CategoryService()

// Routes
router.post('/', validatorHandler(CreateDTO, 'body'), create)
router.get('/', get)
router.get('/:id', validatorHandler(GetDTO, 'parmas'), getById)
router.get('/:name', validatorHandler(GetDTO, 'parmas'), getByName)
router.put('/:id', validatorHandler(GetDTO, 'params'), validatorHandler(UpdateDTO, 'body'), update)
router.delete('/', validatorHandler(GetDTO, 'params'), deleteData)

function create (req, res, next) {
  service.create(req.body)
    .then(data => response.created({ req, res, data }))
    .catch(next)
}
function get (req, res, next) {
  service.getAll()
    .then(data => response.success({ req, res, data }))
    .catch(next)
}
function getById (req, res, next) {
  service.getById(req.params.id)
    .then(data => res.status(200).json(data))
    .catch(next)
}
function getByName (req, res, next) {
  service.getByName(req.params.name)
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
