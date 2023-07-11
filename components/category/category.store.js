import { Model } from 'sequelize'

export const TABLE = 'category'
const modelName = 'Category'

export class Category extends Model {
  static associate () {}

  static config (sequelize) {
    return {
      sequelize,
      tableName: TABLE,
      modelName,
      timestamps: false
    }
  }
}
