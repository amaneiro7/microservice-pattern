'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('user', {
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
          msg: 'Por favor ingrese su nombre'
        }
      },
      lastname: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING,
        notNull: {
          msg: 'Por favor ingrese su apellido'
        }
      },
      email: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING,
        unique: true,
        validate: {
          isEmail: true,
          isLowerCase: true,
          notNull: {
            msg: 'Por favor ingrese su email'
          }
        }
      },
      password: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING,
        validate: {
          notNull: {
            msg: 'Por favor ingrese su contraseña'
          }
        }
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
        type: Sequelize.DataTypes.DATEONLYONLY,
        field: 'created_at',
        defaultValue: Sequelize.NOW
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DataTypes.DATEONLYONLY,
        field: 'updated_at',
        defaultValue: Sequelize.NOW
      }
    })
    await queryInterface.createTable('category', {
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
    await queryInterface.createTable('brand', {
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
    await queryInterface.createTable('brandModel', {
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
          model: 'brand',
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
          model: 'category',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      }
    })
    await queryInterface.createTable('item', {
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
          model: 'category',
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
          model: 'brand',
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
          model: 'brandModel',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      }
    })
  },

  async down (queryInterface) {
    await queryInterface.dropTable('user')
    await queryInterface.dropTable('category')
    await queryInterface.dropTable('brand')
    await queryInterface.dropTable('brandModel')
    await queryInterface.dropTable('item')
  }
}
