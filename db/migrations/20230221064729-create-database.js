'use strict';

const { BRANCH_TABLE, BranchSchema } = require('../models/branch.model');
const { CATEGORY_TABLE, CategorySchema } = require('../models/category.model');
const { COMPUTER_SPECS_TABLE, ComputerSpecsSchema } = require('../models/computerSpecs.model');
const { HARD_DISK_TABLE, HardDiskSchema } = require('../models/hardDisk.model');
const { ITEM_TABLE, ItemSchema } = require('../models/item.model');
const { MEMORY_RAM_TABLE, MemoryRamSchema } = require('../models/memoryRam.model');
const { MEMORY_TYPE_TABLE, MemoryTypeSchema } = require('../models/memoryType.model');
const { MODEL_TABLE, ModelSchema } = require('../models/model.model');
const { PROCESSOR_TABLE, ProcessorSchema } = require('../models/processor.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(BRANCH_TABLE, BranchSchema);
    await queryInterface.createTable(CATEGORY_TABLE, CategorySchema);
    await queryInterface.createTable(ITEM_TABLE, ItemSchema);
    await queryInterface.createTable(MODEL_TABLE, ModelSchema);
    await queryInterface.createTable(COMPUTER_SPECS_TABLE,ComputerSpecsSchema );
    await queryInterface.createTable(PROCESSOR_TABLE, ProcessorSchema);
    await queryInterface.createTable(MEMORY_RAM_TABLE,MemoryRamSchema );
    await queryInterface.createTable(MEMORY_TYPE_TABLE, MemoryTypeSchema);
    await queryInterface.createTable(HARD_DISK_TABLE, HardDiskSchema);
  },

  async down (queryInterface) {
    await queryInterface.dropTable(MODEL_TABLE);
    await queryInterface.dropTable(ITEM_TABLE);
    await queryInterface.dropTable(CATEGORY_TABLE);
    await queryInterface.dropTable(BRANCH_TABLE);
    await queryInterface.dropTable(COMPUTER_SPECS_TABLE);
    await queryInterface.dropTable(PROCESSOR_TABLE);
    await queryInterface.dropTable(MEMORY_RAM_TABLE);
    await queryInterface.dropTable(MEMORY_TYPE_TABLE);
    await queryInterface.dropTable(HARD_DISK_TABLE);
  }
};
