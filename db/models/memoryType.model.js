const { Model, DataTypes, Sequelize } = require('sequelize');
const { COMPUTER_SPECS_TABLE } = require('./computerSpecs.model');

const MEMORY_TYPE_TABLE = 'memory_type';

const MemoryTypeSchema = {
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
  computerSpecs: {
    field: 'computer_specs_id',
    allowNull: true,
    type: DataTypes.INTEGER,
    references: {
      model: COMPUTER_SPECS_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  }
};
class MemoryType extends Model {
  static associate(models) {
    this.belongsTo(models.ComputerSpecs, {as: 'computer_specs'})
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: MEMORY_TYPE_TABLE,
      modelName: 'MemoryType',
      timestamps: false,
    }
  }
};

module.exports = { MemoryTypeSchema, MEMORY_TYPE_TABLE, MemoryType}
