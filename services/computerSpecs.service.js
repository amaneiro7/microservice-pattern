const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class ComputerSpecsService {

  constructor() {

  }

//POST
  async create(data) {
      const newComputerSpecs = await models.ComputerSpecs.create(data)
      return newComputerSpecs
  };
//GET
  async find() {
    const computerSpecs = await models.ComputerSpecs.findAll();
    return computerSpecs;
  }

  async findOne(id) {
    const computerSpecs = await models.ComputerSpecs.findByPk(id);
    if (!computerSpecs) {
      throw boom.notFound('categoria no existe')
    }
    return computerSpecs
  }

  //PATCH
  async update(id, changes) {
    const computerSpecs = await this.findOne(id);
    const res = await computerSpecs.models.update(changes);
    return res
  }

  //DELETE
  async delete(id) {
    const computerSpecs = await this.findOne(id);
    await computerSpecs.destroy();
    return { id };
  }
}

module.exports = ComputerSpecsService
