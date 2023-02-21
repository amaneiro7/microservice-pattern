const { Model, DataTypes, Sequelize } = require('sequelize');
const { COMPUTER_SPECS_TABLE } = require('./computerSpecs.model');

const HARD_DISK_TABLE = 'hard_disk';

const HardDiskSchema = {
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
class HardDisk extends Model {
  static associate(models) {
    this.belongsTo(models.ComputerSpecs, {as: 'computer_specs'})
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: HARD_DISK_TABLE,
      modelName: 'HardDisk',
      timestamps: false,
    }
  }
};

module.exports = { HardDiskSchema, HARD_DISK_TABLE, HardDisk}
