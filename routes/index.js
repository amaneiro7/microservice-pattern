const express = require('express');
const categoriesRouter = require('./categories.router');
const itemsRouter = require('./items.router');
const branchRouter = require("./branch.router.js");
const modelsRouter = require("./model.router.js");


function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router)
  router.use('/items', itemsRouter);
  router.use('/categories', categoriesRouter);
  router.use('/branch', branchRouter);
  router.use('/models', modelsRouter);
};

module.exports = routerApi;
