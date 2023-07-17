'use strict'
const bcrypt = require('bcrypt')
const { USER_TABLE } = require('./../models/user.model')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface) => {
    if (queryInterface.context) {
      queryInterface = queryInterface.context
    }
    return queryInterface.bulkInsert(USER_TABLE, [
      {
        name: 'admin',
        lastname: 'admin',
        email: 'admin@gmail.com',
        password: await bcrypt.hash('Admin123', 10),
        role: 'admin',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'editor',
        lastname: 'editor',
        email: 'editor@gmail.com',
        password: await bcrypt.hash('Editor123', 10),
        role: 'editor',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'auditor',
        lastname: 'auditor',
        email: 'auditor@gmail.com',
        password: await bcrypt.hash('Auditor123', 10),
        role: 'auditor',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'invitado',
        lastname: 'invitado',
        email: 'invitado@gmail.com',
        password: await bcrypt.hash('Invitado123', 10),
        role: 'invitado',
        created_at: new Date(),
        updated_at: new Date()
      }
    ])
  },

  down: async (queryInterface) => {
    if (queryInterface.context) {
      queryInterface = queryInterface.context
    }
    return queryInterface.bulkDelete(USER_TABLE, null, {})
  }
}
