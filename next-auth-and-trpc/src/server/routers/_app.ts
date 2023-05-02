import { createTRPCRouter } from '../trpc'
import { authRouter } from './auth'
import { usersRouter } from './users'

export const appRouter = createTRPCRouter({
  auth: authRouter,
  users: usersRouter
})

export type AppRouter = typeof appRouter
