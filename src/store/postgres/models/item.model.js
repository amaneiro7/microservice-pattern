const { Model, DataTypes, Sequelize } = require('sequelize')
const { CATEGORY_TABLE } = require('./category.model.js')
const { BRAND_TABLE } = require('./brand.model.js')
const { BRAND_MODEL_TABLE } = require('./brandModel.model.js')

const ITEM_TABLE = 'item'
const modelName = 'Item'

const ItemSchema = {
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
  updatedAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'updated_at',
    defaultValue: Sequelize.NOW
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
  brandModelId: {
    field: 'brand_model_id',
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

class Item extends Model {
  static associate (models) {
    this.belongsTo(models.Category, { as: 'category' }),
    this.belongsTo(models.Brand, { as: 'brand' }),
    this.belongsTo(models.BrandModel, { as: 'brand_model' })
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

module.exports = {
  Item, ITEM_TABLE, ItemSchema
}
