const { GraphQLLocalStrategy } = require('graphql-passport')
const controller = require('../../domain/auth/index.js')

const GQLLocalStrategy = new GraphQLLocalStrategy(
  async (email, password, done) => {
    try {
      const user = await controller.getUser({ email, password })
      done(null, user)
    } catch (error) {
      done(error, false)
    }
  }
)
module.exports = { GQLLocalStrategy }
