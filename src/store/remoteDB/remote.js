const axios = require('axios')

function createRemoteDB (host, port) {
  const remoteDataBaseCall = axios.create({
    baseURL: `http://${host}:${port}`,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
  })

  async function request ({ method, url, data }) {
    const response = await remoteDataBaseCall({
      method,
      url,
      data
    })

    return response.data.body
  }

  function list (table) {
    return request({
      method: 'GET',
      url: `/${table}`
    })
  }

  function get (table, id) {
    return request({
      method: 'GET',
      url: `/${table}/${id}`
    })
  }

  function create (table, data) {
    return request({
      method: 'POST',
      url: `/${table}`,
      data
    })
  }

  function query (table, query, join = '') {
    return request({
      method: 'GET',
      url: `/${table}/${table}`,
      data: {
        query,
        join
      }
    })
  }

  function update (table, dataId, data) {
    throw new Error('Not implemented')
  }

  async function upsert (tabla, data) {
    return request({
      method: 'PUT',
      url: `/upsert/${tabla}`,
      data
    })
  }

  async function remove (tabla, id) {
    return request({
      method: 'DELETE',
      url: `/${tabla}/${id}`
    })
  }

  return {
    list,
    get,
    query,
    create,
    update,
    upsert,
    remove
  }
}

module.exports = createRemoteDB
