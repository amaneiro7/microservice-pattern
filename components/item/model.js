import { DataTypes, Sequelize } from 'sequelize'
import { TABLE as BRAND_TABLE } from '../brand/store.js'
import { TABLE as BRAND_MODEL_TABLE } from '../brandModel/store.js'
import { TABLE as CATEGORY_TABLE } from '../category/store.js'

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
