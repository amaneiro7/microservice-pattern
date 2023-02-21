const express = require('express');
const ComputerSpecsService = require("../services/computerSpecs.service");
const validatorHandler = require("../middlewares/validator.handler.js");
const { getComputerSpecsSchema, createComputerSpecsSchema, updateComputerSpecsSchema } = require('../schemas/computerSpecs.schema');

const router = express.Router();
const service = new ComputerSpecsService();

//POST
router.post('/',
  validatorHandler(createComputerSpecsSchema, 'body'),
  async (request, response, next) => {
    try {
      const body = request.body;
      const newCategory = await service.create(body);
      response.status(201).json(newCategory);
    } catch (error) {
      next(error)
    };
  });

//GET
router.get('/', async (request, response, next) => {
  try {
    const categories = await service.find();
    response.json(categories);
  } catch (error) {
    next(error);
  };
});

router.get('/:id',
  validatorHandler(getComputerSpecsSchema, 'params'),
  async (request, response, next) => {
    try {
      const { id } = request.params;
      const category = await service.findOne(id);
      response.json(category);
    } catch (error) {
      next(error)
    }
  });

//PATCH
router.patch('/:id',
  validatorHandler(getComputerSpecsSchema, 'params'),
  validatorHandler(updateComputerSpecsSchema, 'body'),
  async (request, response, next) => {
    try {
      const { id } = request.params;
      const body = request.body;
      const category = await service.update(id, body);
      response.json(category)
    } catch (error) {
      next(error)
    };
  });

//DELETE
router.delete('/:id',
  validatorHandler(getComputerSpecsSchema, 'params'),
  async (request, response, next) => {
    try {
      const { id } = request.params;
      await service.delete(id);
      response.json(201).json({ id })
    } catch (error) {
      next(error)
    }
  });

module.exports = router;
