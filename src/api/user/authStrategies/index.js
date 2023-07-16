import passport from 'passport'
import { LocalStrategy } from './strategies/local.strategy.js'
import { GQLLocalStrategy } from './strategies/local.gql.strategy.js'
import { JwtStrategy } from './strategies/jwt.strategy.js'

passport.use(LocalStrategy)
passport.use(JwtStrategy)
passport.use(GQLLocalStrategy)
