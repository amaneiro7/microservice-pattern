import { Model } from 'sequelize'

export const TABLE = 'brand'
const modelName = 'Brand'

export class Brand extends Model {
  static associate (models) {
    this.hasMany(models.Item, {
      as: 'item',
      foreignKey: 'brandId'
    }),
    this.hasMany(models.BrandModel, {
      as: 'model',
      foreignKey: 'brandId'
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
