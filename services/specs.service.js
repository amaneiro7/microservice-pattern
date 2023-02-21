import { boom } from "@hapi/boom ";
import { models } from "../libs/sequelize";

class CategoryService {

  constructor() {

  }

//POST
  async create(data) {
      const newSpecs = await models.Specs.create(data)
      return newSpecs
  };
//GET
  async find() {
    const specs = await models.Specs.findAll();
    return specs;
  }

  async findOne(id) {
    const specs = await models.Specs.findByPk(id, {
      include: ['branch', 'model', 'specs']
    });
    if (!specs) {
      throw boom.notFound('categoria no existe')
    }
    return specs
  }

  //PATCH
  async update(id, changes) {
    const specs = await models.Specs.findOne(id);
    const res = await specs.models.update(changes);
    return res
  }

  //DELETE
  async delete(id) {
    const specs = await models.Specs.findOne(id);
    await specs.destroy();
    return { id };
  }
}

export default CategoryService
