const { Model, DataTypes, Sequelize } = require('sequelize');
const { MODEL_TABLE } = require('./model.model')

const COMPUTER_SPECS_TABLE = 'computer_specs';

const ComputerSpecsSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  dviInput: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  hdmiInput: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  modelId: {
    field: 'model_id',
    allowNull: true,
    type: DataTypes.INTEGER,
    references: {
      model: MODEL_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW
  },
};
class ComputerSpecs extends Model {
  static associate(models) {
    this.belongsTo(models.Item, { as: 'item'}),
    this.hasMany(models.Processor, {
      as: 'processor',
      foreignKey: 'computerSpecsId'
    }),
    this.hasMany(models.MemoryRam, {
      as: 'memory_ram',
      foreignKey: 'computerSpecsId'
    }),
    this.hasMany(models.MemoryType, {
      as: 'memory_type',
      foreignKey: 'computerSpecsId'
    }),
    this.hasMany(models.HardDisk, {
      as: 'hard_disk',
      foreignKey: 'computerSpecsId'
    })
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: COMPUTER_SPECS_TABLE,
      modelName: 'ComputerSpecs',
      timestamps: false,
    }
  }
};

module.exports = { ComputerSpecsSchema, COMPUTER_SPECS_TABLE, ComputerSpecs}
