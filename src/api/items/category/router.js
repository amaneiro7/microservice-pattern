import { Router } from 'express'
import Controller from './controller.js'
import { CreateDTO, GetDTO, UpdateDTO } from './dto.js'
import createRoute from '../../../utils/functionNetwork.js'

const router = Router()
const controller = new Controller()

createRoute(router, { CreateDTO, GetDTO, UpdateDTO }, controller)

export default router
