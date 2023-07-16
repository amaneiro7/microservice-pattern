import { Model, DataTypes, Sequelize } from 'sequelize'
import { CATEGORY_TABLE } from './category.model.js'
import { BRAND_TABLE } from './brand.model.js'
import { BRAND_MODEL_TABLE } from './brandModel.model.js'

export const ITEM_TABLE = 'item'
const modelName = 'Item'

export const ItemSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  serial: {
    allowNull: true,
    type: DataTypes.STRING,
    unique: true
  },
  activo: {
    allowNull: true,
    type: DataTypes.STRING,
    unique: true
  },
  status: {
    allowNull: false,
    type: DataTypes.BOOLEAN
  },
  obsolete: {
    allowNull: false,
    type: DataTypes.BOOLEAN
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW
  },
  categoryId: {
    field: 'categroy_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: CATEGORY_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
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
  modelId: {
    field: 'model_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: BRAND_MODEL_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  }
}

export class Item extends Model {
  static associate (models) {
    this.belongsTo(models.Category, { as: 'category' }),
    this.belongsTo(models.Brand, { as: 'brand' }),
    this.belongsTo(models.BrandModel, { as: 'brandModel' })
  }

  static config (sequelize) {
    return {
      sequelize,
      tableName: ITEM_TABLE,
      modelName,
      timestamps: false
    }
  }
}