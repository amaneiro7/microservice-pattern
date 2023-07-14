import { Model } from 'sequelize'

export const TABLE = 'category'
const modelName = 'Category'

export class Category extends Model {
  static associate (models) {
    this.hasMany(models.Item, {
      as: 'item',
      foreignKey: 'categoryId'
    })
    this.hasMany(models.BrandModel, {
      as: 'model',
      foreignKey: 'categoryId'
    })
  }

  static config (sequelize) {
    return {
      sequelize,
      tableName: TABLE,
      modelName,
      timestamps: false
    }
  }
}
