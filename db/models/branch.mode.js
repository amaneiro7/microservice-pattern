const { Model, DataTypes, Sequelize } = require('sequelize');

const BRANCH_TABLE = 'branch';

const BranchSchema = {
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
  }
};

class Branch extends Model {
  static associate(models) {
    this.hasOne(models.Model, {
      as: 'category',
      foreignKey: 'categoryId'
    })
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: BRANCH_TABLE,
      modelName: 'Branch',
      timestamps: false,
    }
  }
};

module.exports = { BranchSchema, BRANCH_TABLE, Branch}
