import { Model, DataTypes, Sequelize } from 'sequelize'
import { BRAND_TABLE } from './brand.model'
import { CATEGORY_TABLE } from './category.model'

export const MODEL_TABLE = 'model'

export const ModelSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    allowNull: true,
    type: DataTypes.STRING,
    unique: true
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW
  },
  brandId: {
    field: 'brand_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: BRAND_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  categoryId: {
    field: 'category_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: CATEGORY_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  }
}

export class Models extends Model {
  static associate (models) {
    this.belongsTo(models.Category, { as: 'category' }),
    this.belongsTo(models.Brand, { as: 'brand' }),
    this.hasMany(models.Item, {
      as: 'item',
      foreignKey: 'modelId'
    })
  }

  static config (sequelize) {
    return {
      sequelize,
      tableName: MODEL_TABLE,
      modelName: 'Models',
      timestamps: false
    }
  }
}
