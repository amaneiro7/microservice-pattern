const { Model, DataTypes, Sequelize } = require('sequelize')

const USER_TABLE = 'user'
const modelName = 'User'

const UserSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
    notNull: {
      msg: 'Por favor ingrese su nombre'
    }
  },
  lastname: {
    allowNull: false,
    type: DataTypes.STRING,
    notNull: {
      msg: 'Por favor ingrese su apellido'
    }
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
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
    type: DataTypes.STRING,
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
    type: DataTypes.STRING
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW
  },
  updatedAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'updated_at',
    defaultValue: Sequelize.NOW
  }
}

class User extends Model {
  static associate () {}

  static config (sequelize) {
    return {
      sequelize,
      tableName: USER_TABLE,
      modelName,
      timestamps: false
    }
  }
}

module.exports = {
  User, USER_TABLE, UserSchema
}
