import { express } from "express";
import categoriesRouter from "./categories.router";
import branchRouter from "./branch.router";
import modelsRouter from "./model.router";


function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router)
  router.use('/categories', categoriesRouter);
  router.use('/branch', branchRouter);
  router.use('/models', modelsRouter);
};

export default routerApi;
