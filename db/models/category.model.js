const { Model, DataTypes, Sequelize } = require('sequelize');
const { BRANCH_TABLE } = require('./branch.mode');

const CATEGORY_TABLE = 'category';

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
    unique: true,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW
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
    onDelete: 'SET_NULL'
  }
};
class Category extends Model {
  static associate(models) {
    this.hasMany(models.Item, {
      as: 'items',
      foreignKey: 'categoryId'
    }),
    this.belongsTo(models.Branch, {as: 'branch'})
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: CATEGORY_TABLE,
      modelName: 'Category',
      timestamps: false,
    }
  }
};

module.exports = { CategorySchema, CATEGORY_TABLE, Category}
