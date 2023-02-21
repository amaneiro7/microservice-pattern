const express = require('express');
const BranchService = require("../services/branch.service.js");
const validatorHandler = require("../middlewares/validator.handler.js");
const { createBranchSchema, getBranchSchema, updateBranchSchema } = require("../schemas/branch.schema.js");

const router = express.Router();
const service = new BranchService();

//POST
router.post('/',
  validatorHandler(createBranchSchema, 'body'),
  async (request, response, next) => {
    try {
      const body = request.body;
      const newBranch = await service.create(body);
      response.status(201).json(newBranch);
    } catch (error) {
      next(error)
    };
  });

//GET
router.get('/',
  async (request, response, next) => {
    try {
      const branch = await service.find()
      response.json(branch)
    } catch (error) {
      next(error)
    }
  });
router.get('/:id',
  validatorHandler(getBranchSchema, 'params'),
  async (request, response, next) => {
    try {
      const { id } = request.params;
      const branch = await service.findOne(id)
      response.json(branch)
    } catch (error) {
      next(error)
    }
  });

//PATCH
router.patch('/:id',
  validatorHandler(getBranchSchema, 'params'),
  validatorHandler(updateBranchSchema, 'body'),
  async (request, response, next) => {
    try {
      const { id } = request.params;
      const body = request.body;
      const branch = await service.update(id, body)
      response.json(branch)
    } catch (error) {
      next(error)
    }
  });

//DELETE
router.delete('/:id',
  validatorHandler(getBranchSchema, 'params'),
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
