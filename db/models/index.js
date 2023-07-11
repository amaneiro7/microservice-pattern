import { Category, CategorySchema } from './category.model.js'
import { Item, ItemSchema } from './item.model.js'
import { Brand, BrandSchema } from './brand.model.js'
import { Models, ModelSchema } from './model.model.js'
import { User } from '../../components/user/user.store.js'
import { UserSchema } from '../../components/user/user.model.js'

export default function SetupModels (sequelize) {
  Category.init(CategorySchema, Category.config(sequelize))
  Item.init(ItemSchema, Item.config(sequelize))
  Brand.init(BrandSchema, Brand.config(sequelize))
  Models.init(ModelSchema, Models.config(sequelize))
  User.init(UserSchema, User.config(sequelize))

  Category.associate(sequelize.models)
  Item.associate(sequelize.models)
  Brand.associate(sequelize.models)
  Models.associate(sequelize.models)
  User.associate(sequelize.models)
};
