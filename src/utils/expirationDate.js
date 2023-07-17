const expirationDate = () => Math.floor(Date.now() / 1000) + (60 * 60)

module.exports = { expirationDate }
