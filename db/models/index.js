import { User } from '../../components/user/store.js'
import { UserSchema } from '../../components/user/model.js'
import { Category } from '../../components/category/store.js'
import { CategorySchema } from '../../components/category/model.js'
import { Item } from '../../components/item/store.js'
import { ItemSchema } from '../../components/item/model.js'
import { Brand } from '../../components/brand/store.js'
import { BrandSchema } from '../../components/brand/model.js'
import { BrandModel } from '../../components/brandModel/store.js'
import { BrandModelSchema } from '../../components/brandModel/model.js'

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
