import { ValidationError } from 'sequelize'

export function logErrors (err, req, res, next) {
  console.log(err)
  next(err)
};

export function errorHandler (err, req, res, next) {
  res.status(500).json({
    message: err.message,
    stack: err.stack
  })
  next(err)
};

export function boomErrorHandler (err, req, res, next) {
  if (err.isBoom) {
    const { output } = err
    res.status(output.statusCode).json(output.payload)
  }
  next(err)
};

export function ormErrorHandler (err, req, res, next) {
  if (err instanceof ValidationError) {
    res.status(409).json({
      statusCode: 409,
      message: err.name,
      error: err.errors
    })
  };
  next(err)
}
