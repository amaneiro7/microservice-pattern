import { Router } from 'express'
import controller from './index.js'
import { CreateDTO, GetByIdDTO, GetByNameDTO, UpdateDTO } from './dto.js'
import createRoute from '../../../../utils/functionNetwork.js'

const router = Router()
// const controller = new Controller()

createRoute(router, { CreateDTO, GetByIdDTO, GetByNameDTO, UpdateDTO }, controller)

export default router
