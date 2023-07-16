import { GraphQLLocalStrategy } from 'graphql-passport'
import Controller from '../../domain/auth/controller.js'

const controller = new Controller()

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
