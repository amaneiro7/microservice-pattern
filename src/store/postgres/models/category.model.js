const { Model, DataTypes, Sequelize } = require('sequelize')

const CATEGORY_TABLE = 'category'
const modelName = 'Category'

const CategorySchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
    notNull: {
      msg: 'Por favor ingrese el nombre de la categoria'
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
  }
}

class Category extends Model {
  static associate (models) {
    this.hasMany(models.Item, {
      as: 'item',
      foreignKey: 'category_id'
    })
    this.hasMany(models.BrandModel, {
      as: 'brand_model',
      foreignKey: 'category_id'
    })
  }

  static config (sequelize) {
    return {
      sequelize,
      tableName: CATEGORY_TABLE,
      modelName,
      timestamps: false
    }
  }
}

module.exports = {
  CategorySchema, Category, CATEGORY_TABLE
}
