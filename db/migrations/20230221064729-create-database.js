'use strict';

const { CATEGORY_TABLE, CategorySchema } = require('../models/category.model');
const { ITEM_TABLE, ItemSchema } = require('../models/item.model');
const { BRANCH_TABLE, BranchSchema } = require('../models/branch.model');
const { MODEL_TABLE, ModelSchema } = require('../models/model.model');


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(BRANCH_TABLE, BranchSchema);
    await queryInterface.createTable(CATEGORY_TABLE, CategorySchema);
    await queryInterface.createTable(ITEM_TABLE, ItemSchema);
    await queryInterface.createTable(MODEL_TABLE, ModelSchema);
  },

  async down (queryInterface) {
    await queryInterface.dropTable(MODEL_TABLE);
    await queryInterface.dropTable(ITEM_TABLE);
    await queryInterface.dropTable(CATEGORY_TABLE);
    await queryInterface.dropTable(BRANCH_TABLE);
  }
};
