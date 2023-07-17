exports.success = ({ req, res, data, message = 'Operacion exitosa', status = 200 }) => basedResponse(req, res, data, message, status)
exports.created = ({ req, res, data, message = 'El elemento fue creado exitosamente', status = 201 }) => basedResponse(req, res, data, message, status)
exports.updated = ({ req, res, data, message = 'El elemento fue actualizado exitosamente', status = 201 }) => basedResponse(req, res, data, message, status)
exports.deleted = ({ req, res, data, message = 'El elemento fue eliminado exitosamente', status = 201 }) => basedResponse(req, res, data, message, status)

function basedResponse (req, res, data, message = '', status = 200) {
  res.status(status).send({
    err: false,
    status,
    message,
    data
  })
}
