import { Model } from 'sequelize'

export const TABLE = 'item'
const modelName = 'Item'

export class Item extends Model {
  static associate (models) {
    this.belongsTo(models.Category, { as: 'category' }),
    this.belongsTo(models.Brand, { as: 'brand' }),
    this.belongsTo(models.Models, { as: 'brandModel' })
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
