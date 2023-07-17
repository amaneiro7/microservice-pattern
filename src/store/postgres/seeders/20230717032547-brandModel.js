'use strict'
const { BRAND_MODEL_TABLE } = require('./../models/brandModel.model')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface) => {
    if (queryInterface.context) {
      queryInterface = queryInterface.context
    }
    return queryInterface.bulkInsert(BRAND_MODEL_TABLE, [
      {
        name: 'HP 6300',
        category_id: 1,
        brand_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Model 2',
        category_id: 2,
        brand_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Model 3',
        category_id: 3,
        brand_id: 3,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Moldel 4',
        category_id: 1,
        brand_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      }
    ])
  },

  down: async (queryInterface) => {
    if (queryInterface.context) {
      queryInterface = queryInterface.context
    }
    return queryInterface.bulkDelete(BRAND_MODEL_TABLE, null, {})
  }
}
