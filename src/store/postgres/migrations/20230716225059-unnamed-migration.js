'use strict'

const { CATEGORY_TABLE } = require('../models/category.model')
const { ITEM_TABLE } = require('../models/item.model')
const { BRAND_TABLE } = require('../models/brand.model')
const { BRAND_MODEL_TABLE } = require('../models/brandModel.model')
const { USER_TABLE } = require('../models/user.model')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(USER_TABLE, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING
      },
      lastname: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING
      },
      email: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING,
        unique: true
      },
      password: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING
      },
      role: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING
      },
      recoveryToken: {
        field: 'recovery_token',
        allowNull: true,
        type: Sequelize.DataTypes.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DataTypes.DATEONLY,
        field: 'created_at',
        defaultValue: Sequelize.NOW
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DataTypes.DATEONLY,
        field: 'updated_at',
        defaultValue: Sequelize.NOW
      }
    })
    await queryInterface.createTable(CATEGORY_TABLE, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING,
        notNull: {
          msg: 'Por favor ingrese el nombre de la categoria'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DataTypes.DATEONLY,
        field: 'created_at',
        defaultValue: Sequelize.NOW
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DataTypes.DATEONLY,
        field: 'updated_at',
        defaultValue: Sequelize.NOW
      }
    })
    await queryInterface.createTable(BRAND_TABLE, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING,
        uniqie: true,
        notNull: {
          msg: 'Por favor ingrese el nombre de la Marca'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DataTypes.DATEONLY,
        field: 'created_at',
        defaultValue: Sequelize.NOW
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DataTypes.DATEONLY,
        field: 'updated_at',
        defaultValue: Sequelize.NOW
      }
    })
    await queryInterface.createTable(BRAND_MODEL_TABLE, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING,
        unique: true,
        notNull: {
          msg: 'Por favor ingrese el nombre del Modelo'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DataTypes.DATEONLY,
        field: 'created_at',
        defaultValue: Sequelize.NOW
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DataTypes.DATEONLY,
        field: 'updated_at',
        defaultValue: Sequelize.NOW
      },
      brandId: {
        field: 'brand_id',
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: BRAND_TABLE,
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      categoryId: {
        field: 'category_id',
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: CATEGORY_TABLE,
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      }
    })
    await queryInterface.createTable(ITEM_TABLE, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER
      },
      serial: {
        allowNull: true,
        type: Sequelize.DataTypes.STRING,
        unique: true
      },
      activo: {
        allowNull: true,
        type: Sequelize.DataTypes.STRING,
        unique: true
      },
      status: {
        allowNull: false,
        type: Sequelize.DataTypes.BOOLEAN
      },
      obsolete: {
        allowNull: false,
        type: Sequelize.DataTypes.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DataTypes.DATEONLY,
        field: 'created_at',
        defaultValue: Sequelize.NOW
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DataTypes.DATEONLY,
        field: 'updated_at',
        defaultValue: Sequelize.NOW
      },
      categoryId: {
        field: 'categroy_id',
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: CATEGORY_TABLE,
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      brandId: {
        field: 'brand_id',
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: BRAND_TABLE,
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      modelId: {
        field: 'model_id',
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: BRAND_MODEL_TABLE,
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      }
    })
  },

  async down (queryInterface) {
    await queryInterface.dropTable(USER_TABLE)
    await queryInterface.dropTable(CATEGORY_TABLE)
    await queryInterface.dropTable(BRAND_TABLE)
    await queryInterface.dropTable(BRAND_MODEL_TABLE)
    await queryInterface.dropTable(ITEM_TABLE)
  }
}
