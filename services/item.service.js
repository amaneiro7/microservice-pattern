const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class ItemService {

  constructor() {

  }

//POST
  async create(data) {
      const newItem = await models.Item.create(data)
      return newItem
  };
//GET
  async find() {
    const items = await models.Item.findAll();
    return items;
  }

  async findOne(id) {
    const item = await models.Item.findByPk(id, {
      include: ['categories', 'branch', 'model', 'specs']
    });
    if (!item) {
      throw boom.notFound('item no existe')
    }
    return item
  }

  //PATCH
  async update(id, changes) {
    const item = await models.Item.findOne(id);
    const res = await item.models.update(changes);
    return res
  }

  //DELETE
  async delete(id) {
    const item = await models.Item.findOne(id);
    await item.destroy();
    return { id };
  }

}

module.exports = ItemService;
