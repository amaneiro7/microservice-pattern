const redis = require('redis')
const { config } = require('../../config')

const client = redis.createClient({
  host: config.redis.host,
  port: config.redis.port,
  password: config.redis.password
})

function getAll (table) {
  return new Promise((resolve, reject) => {
    client.get(table, (err, data) => {
      if (err) return reject(err)

      let res = data || null
      if (data) {
        res = JSON.parse(data)
      }
      resolve(res)
    })
  })
}

module.exports = {
  getAll

}
