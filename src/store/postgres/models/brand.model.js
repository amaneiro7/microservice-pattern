import { Model, DataTypes, Sequelize } from 'sequelize'

export const BRAND_TABLE = 'brand'
const modelName = 'Brand'

export const BrandSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
    uniqie: true,
    notNull: {
      msg: 'Por favor ingrese el nombre de la Marca'
    }
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW
  }
}

export class Brand extends Model {
  static associate (models) {
    this.hasMany(models.Item, {
      as: 'item',
      foreignKey: 'brandId'
    }),
    this.hasMany(models.BrandModel, {
      as: 'model',
      foreignKey: 'brandId'
    })
  }

  static config (sequelize) {
    return {
      sequelize,
      tableName: BRAND_TABLE,
      modelName,
      timestamps: false
    }
  }
}