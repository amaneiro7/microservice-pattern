
const { Branch, BranchSchema } = require('./branch.model');
const { Category, CategorySchema } = require('./category.model');
const { Item, ItemSchema } = require('./item.model');
const { Models, ModelSchema } = require('./model.model');
const { ComputerSpecs } = require('./computerSpecs.model');
const { Processor } = require('./processor.model');
const { MemoryRam } = require('./memoryRam.model');
const { MemoryType } = require('./memoryType.model');
const { HardDisk } = require('./hardDisk.model');


function SetupModels(sequelize) {
  Item.init(ItemSchema, Item.config(sequelize));
  Category.init(CategorySchema, Category.config(sequelize));
  Branch.init(BranchSchema, Branch.config(sequelize));
  Models.init(ModelSchema, Models.config(sequelize));
  ComputerSpecs.init(ModelSchema, ComputerSpecs.config(sequelize));
  Processor.init(ModelSchema, Processor.config(sequelize));
  MemoryRam.init(ModelSchema, MemoryRam.config(sequelize));
  MemoryType.init(ModelSchema, MemoryType.config(sequelize));
  HardDisk.init(ModelSchema, HardDisk.config(sequelize));

  Item.associate(sequelize.models);
  Category.associate(sequelize.models);
  Branch.associate(sequelize.models);
  Models.associate(sequelize.models);
  ComputerSpecs.associate(sequelize.models);
  Processor.associate(sequelize.models);
  MemoryRam.associate(sequelize.models);
  MemoryType.associate(sequelize.models);
  HardDisk.associate(sequelize.models);
};

module.exports = SetupModels;
