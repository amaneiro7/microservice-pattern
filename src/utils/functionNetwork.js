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
    const payload = req.body
    controller.create({ payload })
      .then(data => response.created({ req, res, data }))
      .catch(next)
  }
  function get (req, res, next) {
    controller.getAll()
      .then(data => response.success({ req, res, data }))
      .catch(next)
  }
  function getById (req, res, next) {
    const { id } = req.params
    controller.getById({ id })
      .then(data => response.success({ req, res, data }))
      .catch(next)
  }
  function getByName (req, res, next) {
    const { name } = req.params
    controller.getByName({ name })
      .then(data => response.success({ req, res, data }))
      .catch(next)
  }
  function update (req, res, next) {
    const { id } = req.params
    const changes = req.body
    controller.update({ id, changes })
      .then(data => response.updated({ req, res, data }))
      .catch(next)
  }
  function deleteData (req, res, next) {
    const { id } = req.params
    controller.delete({ id })
      .then(data => response.deleted({ req, res, data }))
      .catch(next)
  }
}

// Ejemplo de uso
// const router = Router()
// const controller = new Controller()
// createRoute(router, { CreateDTO, GetDTO, UpdateDTO }, controller)
