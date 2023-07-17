const { Router } = require('express')
const { config } = require('../config')
const response = require('../middlewares/response.js')
const store = require('../store/redis/redis.store.js')

const routes = (server) => {
  const router = Router()
  server.use(config.baseApiUrl, router)
  router.post('/:table', create)
  router.get('/:table', getAll)
  router.get('/:table/:id', getById)
  router.get('/:table/:name', getByName)
  router.put('/:table', update)
  router.delete('/:table', remove)
}

// Internal Function
async function create (req, res, next) {
  const data = await store.list(req.params.table)
  response.created({ req, res, data })
}
async function getAll (req, res, next) {
  const data = await store.list(req.params.table)
  response.success({ req, res, data })
}

async function getById (req, res, next) {
  const data = await store.get(req.params.table, req.params.id)
  response.success({ req, res, data })
}
async function getByName (req, res, next) {
  const data = await store.get(req.params.table, req.params.id)
  response.success({ req, res, data })
}
async function update (req, res, next) {
  const data = await store.upsert(req.params.table, req.body)
  response.updated({ req, res, data })
}
async function remove (req, res, next) {
  const data = await store.upsert(req.params.table, req.body)
  response.remove({ req, res, data })
}

module.exports = routes
