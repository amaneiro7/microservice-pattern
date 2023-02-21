const { Model, DataTypes, Sequelize } = require('sequelize');

const ITEM_TABLE = 'item';

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
    unique: true,
  },
  activo: {
    allowNull: true,
    type: DataTypes.STRING,
    unique: true,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW
  },
};

class Item extends Model {
  static associate(models) {
    this.hasOne(models.Category, {
      as: 'category',
      foreignKey: 'categoryId'
    })
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: ITEM_TABLE,
      modelName: 'Item',
      timestamps: false,
    }
  }
};

module.exports = { ItemSchema, ITEM_TABLE, Item}
