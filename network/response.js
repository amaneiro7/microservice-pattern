const success = ({ req, res, data, message = 'Operacion exitosa', status = 200 }) => basedResponse(req, res, data, message, status)
const created = ({ req, res, data, message = 'El elemento fue creado exitosamente', status = 201 }) => basedResponse(req, res, data, message, status)
const updated = ({ req, res, data, message = 'El elemento fue actualizado exitosamente', status = 201 }) => basedResponse(req, res, data, message, status)
const deleted = ({ req, res, data, message = 'El elemento fue eliminado exitosamente', status = 201 }) => basedResponse(req, res, data, message, status)
export default {
  success,
  created,
  updated,
  deleted
}

function basedResponse (req, res, data, message = '', status = 200) {
  res.status(status).send({
    err: false,
    status,
    message,
    data
  })
}
