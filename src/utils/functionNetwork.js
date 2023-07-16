import response from '../middlewares/response.js'
import validatorHandler from '../middlewares/validator.handler.js'

export default function createRoute (router, dto, controller) {
  router.post('/', validatorHandler(dto.CreateDTO, 'body'), create)
  router.get('/', get)
  router.get('/:id', validatorHandler(dto.GetDTO, 'params'), getById)
  router.get('/:name', validatorHandler(dto.GetDTO, 'params'), getByName)
  router.patch('/:id', validatorHandler(dto.GetDTO, 'params'), validatorHandler(dto.UpdateDTO, 'body'), update)
  router.delete('/', validatorHandler(dto.GetDTO, 'params'), deleteData)

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
      .then(data => response.success({ req, res, data }))
      .catch(next)
  }
  function getByName (req, res, next) {
    controller.getByName(req.params.name)
      .then(data => response.success({ req, res, data }))
      .catch(next)
  }
  function update (req, res, next) {
    controller.update(req.params.id, req.body)
      .then(data => response.updated({ req, res, data }))
      .catch(next)
  }
  function deleteData (req, res, next) {
    controller.delete(req.params.id)
      .then(data => response.deleted({ req, res, data }))
      .catch(next)
  }
}

// Ejemplo de uso
// const router = Router()
// const controller = new Controller()
// createRoute(router, { CreateDTO, GetDTO, UpdateDTO }, controller)
