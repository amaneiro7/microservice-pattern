const { Model, DataTypes, Sequelize } = require('sequelize')
const { BRAND_TABLE } = require('./brand.model.js')
const { CATEGORY_TABLE } = require('./category.model.js')

const BRAND_MODEL_TABLE = 'brand_model'
const modelName = 'BrandModel'

const BrandModelSchema = {
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

class BrandModel extends Model {
  static associate (models) {
    this.belongsTo(models.Category, { as: 'category' }),
    this.belongsTo(models.Brand, { as: 'brand' }),
    this.hasMany(models.Item, {
      as: 'Item',
      foreignKey: 'brand_model_id'
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

module.exports = {
  BRAND_MODEL_TABLE, BrandModel, BrandModelSchema
}
