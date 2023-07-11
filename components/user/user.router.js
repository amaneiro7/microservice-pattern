import { Router } from 'express'
import validatorHandler from '../../middlewares/validator.handler.js'
import Service from './user.service.js'
import { CreateUserDTO, GetUserDTO, UpdateUserDTO } from './user.schema.js'

const router = Router()
const service = new Service()

// Routes
router

function create (req, res, next) {
  service.create(req.body)
    .then(data => )
}
function getAll (req, res, next) {
  service.getAll
}
function getOne (req, res, next) {
  service.getOne
}
function update (req, res, next) {
  service.update
}
function deleteData (req, res, next) {
  service.delete
}
