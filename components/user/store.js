import { Model } from 'sequelize'

export const TABLE = 'user'
const modelName = 'User'

export class User extends Model {
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
