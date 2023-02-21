
const { Branch, BranchSchema } = require('./branch.mode');
const { Category, CategorySchema } = require('./category.model');
const { Item, ItemSchema } = require('./item.model');
const { Models, ModelSchema } = require('./model.model');


function SetupModels(sequelize) {
  Item.init(ItemSchema, Item.config(sequelize));
  Category.init(CategorySchema, Category.config(sequelize));
  Branch.init(BranchSchema, Branch.config(sequelize));
  Models.init(ModelSchema, Models.config(sequelize));

  Item.associate(sequelize.models);
  Category.associate(sequelize.models);
  Branch.associate(sequelize.models);
  Models.associate(sequelize.models);
};

module.exports = SetupModels;
