import { Category, CategorySchema } from './category.model.js'
import { Item, ItemSchema } from './item.model.js'
import { Brand, BrandSchema } from './brand.model.js'
import { BrandModel, BrandModelSchema } from './brandModel.model.js'
import { User, UserSchema } from './user.model.js'

export default function SetupModels (sequelize) {
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
