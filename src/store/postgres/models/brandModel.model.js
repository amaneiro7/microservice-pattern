import { Model, DataTypes, Sequelize } from 'sequelize'
import { BRAND_TABLE } from './brand.model.js'
import { CATEGORY_TABLE } from './category.model.js'

export const BRAND_MODEL_TABLE = 'brandModel'
const modelName = 'BrandModel'

export const BrandModelSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
    notNull: {
      msg: 'Por favor ingrese el nombre del Modelo'
    }
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW
  },
  updatedAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'updated_at',
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
      tableName: BRAND_MODEL_TABLE,
      modelName,
      timestamps: false
    }
  }
}
