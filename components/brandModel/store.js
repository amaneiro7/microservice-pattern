import { Model } from 'sequelize'

export const TABLE = 'brandModel'
const modelName = 'BrandModel'

export class BrandModel extends Model {
  static associate (models) {
    this.belongsTo(models.Category, { as: 'category' }),
    this.belongsTo(models.Brand, { as: 'brand' }),
    this.hasMany(models.Item, {
      as: 'Item',
      foreignKey: 'modelId'
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
