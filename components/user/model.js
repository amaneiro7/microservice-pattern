import { DataTypes, Sequelize } from 'sequelize'

export const UserSchema = {
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
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW
  }
}
