'use strict'
const { ITEM_TABLE } = require('./../models/item.model')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface) => {
    if (queryInterface.context) {
      queryInterface = queryInterface.context
    }
    return queryInterface.bulkInsert(ITEM_TABLE, [
      {
        serial: 'MXJ50505045',
        activo: '202500',
        status: true,
        obsolete: false,
        category_id: 1,
        brand_id: 1,
        brand_model_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        serial: 'MXJ5050503',
        activo: '13456',
        status: true,
        obsolete: false,
        category_id: 2,
        brand_id: 2,
        brand_model_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        serial: 'MXJ5050502',
        activo: '829634',
        status: true,
        obsolete: false,
        category_id: 3,
        brand_id: 3,
        brand_model_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        serial: 'MXJ5050501',
        activo: '753159',
        status: true,
        obsolete: false,
        category_id: 1,
        brand_id: 1,
        brand_model_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      }
    ])
  },

  down: async (queryInterface) => {
    if (queryInterface.context) {
      queryInterface = queryInterface.context
    }
    return queryInterface.bulkDelete(ITEM_TABLE, null, {})
  }
}
