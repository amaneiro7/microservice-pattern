'use strict'
const { BRAND_TABLE } = require('./../models/brand.model')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface) => {
    if (queryInterface.context) {
      queryInterface = queryInterface.context
    }
    return queryInterface.bulkInsert(BRAND_TABLE, [
      {
        name: 'Lenovo',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Hewlett-Packard',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Siragon',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Acer',
        created_at: new Date(),
        updated_at: new Date()
      }
    ])
  },

  down: async (queryInterface) => {
    if (queryInterface.context) {
      queryInterface = queryInterface.context
    }
    return queryInterface.bulkDelete(BRAND_TABLE, null, {})
  }
}
