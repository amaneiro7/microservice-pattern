import { express } from "express";
import ModelService from "../services/model.service";
import { validatorHandler } from "../middlewares/validator.handler";
import { createModelSchema, getModelSchema, updateModelSchema } from "../schemas/model.schema";

const router = express.Router();
const service = new ModelService();

//POST
router.post('/',
  validatorHandler(createModelSchema, 'body'),
  async (request, response, next) => {
    try {
      const body = request.body;
      const newModel = await service.create(body);
      response.status(201).json(newModel);
    } catch (error) {
      next(error)
    };
  });

//GET
router.get('/',
  async (request, response, next) => {
    try {
      const model = await service.find()
      response.json(model)
    } catch (error) {
      next(error)
    }
  });
router.get('/:id',
  validatorHandler(getModelSchema, 'params'),
  async (request, response, next) => {
    try {
      const { id } = request.params;
      const model = await service.findOne(id)
      response.json(model)
    } catch (error) {
      next(error)
    }
  });

//PATCH
router.patch('/:id',
  validatorHandler(getModelSchema, 'params'),
  validatorHandler(updateModelSchema, 'body'),
  async (request, response, next) => {
    try {
      const { id } = request.params;
      const body = request.body;
      const model = await service.update(id, body)
      response.json(model)
    } catch (error) {
      next(error)
    }
  });

//DELETE
router.delete('/:id',
  validatorHandler(getModelSchema, 'params'),
  async (request, response, next) => {
    try {
      const { id } = request.params;
      await service.delete(id);
      response.json(201).json({ id })
    } catch (error) {
      next(error)
    }
  });

  export default router;
