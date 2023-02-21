const { Model, DataTypes, Sequelize } = require('sequelize');
const { CATEGORY_TABLE } = require('./category.model');
const { BRANCH_TABLE } = require('./branch.model');

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
  branchId: {
    field: 'branch_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: BRANCH_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  }
};

class Item extends Model {
  static associate(models) {
    this.belongsTo(models.Category, { as: 'category' })
    this.belongsTo(models.Branch, { as: 'branch' })
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
