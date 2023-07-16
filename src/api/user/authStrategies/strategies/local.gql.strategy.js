import { GraphQLLocalStrategy } from 'graphql-passport'
import controller from '../../domain/auth/index.js'

export const GQLLocalStrategy = new GraphQLLocalStrategy(
  async (email, password, done) => {
    try {
      const user = await controller.getUser({ email, password })
      done(null, user)
    } catch (error) {
      done(error, false)
    }
  }
)
