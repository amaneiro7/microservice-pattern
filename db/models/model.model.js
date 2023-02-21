const { Model, DataTypes, Sequelize } = require('sequelize');
const { BRANCH_TABLE } = require('./branch.mode');

const MODEL_TABLE = 'model';

const ModelSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
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

class Models extends Model {
  static associate(models) {
    this.belongsTo(models.Branch, { as: 'branch' })
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: MODEL_TABLE,
      modelName: 'Model',
      timestamps: false,
    }
  }
};

module.exports = { ModelSchema, MODEL_TABLE, Models}
