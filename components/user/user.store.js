import { Model } from 'sequelize'

export const USER_TABLE = 'user'

export class User extends Model {
  static associate () {}

  static config (sequelize) {
    return {
      sequelize,
      tableName: USER_TABLE,
      modelName: 'User',
      timestamps: false
    }
  }
}
