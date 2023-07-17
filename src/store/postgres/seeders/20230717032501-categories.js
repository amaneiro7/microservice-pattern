'use strict'
const { CATEGORY_TABLE } = require('./../models/category.model')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface) => {
    if (queryInterface.context) {
      queryInterface = queryInterface.context
    }
    return queryInterface.bulkInsert(CATEGORY_TABLE, [
      {
        name: 'Monitores',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Impresoras',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Teclados',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Servidores',
        created_at: new Date(),
        updated_at: new Date()
      }
    ])
  },

  down: async (queryInterface) => {
    if (queryInterface.context) {
      queryInterface = queryInterface.context
    }
    return queryInterface.bulkDelete(CATEGORY_TABLE, null, {})
  }
}
