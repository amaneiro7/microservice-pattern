const { Category, CategorySchema } = require('./category.model.js')
const { Item, ItemSchema } = require('./item.model.js')
const { Brand, BrandSchema } = require('./brand.model.js')
const { BrandModel, BrandModelSchema } = require('./brandModel.model.js')
const { User, UserSchema } = require('./user.model.js')

function SetupModels (sequelize) {
  Category.init(CategorySchema, Category.config(sequelize))
  Item.init(ItemSchema, Item.config(sequelize))
  Brand.init(BrandSchema, Brand.config(sequelize))
  BrandModel.init(BrandModelSchema, BrandModel.config(sequelize))
  User.init(UserSchema, User.config(sequelize))

  Category.associate(sequelize.models)
  Item.associate(sequelize.models)
  Brand.associate(sequelize.models)
  BrandModel.associate(sequelize.models)
  User.associate(sequelize.models)
};

module.exports = SetupModels
