import { z } from 'zod'

import { getAllUsers, getUserById } from '../lib/users'
import { createTRPCRouter, publicProcedure } from '../trpc'

const userIdSchema = z.object({
  id: z.number()
})

export const usersRouter = createTRPCRouter({
  getAll: publicProcedure.query(() => {
    return getAllUsers()
  }),
  getById: publicProcedure.input(userIdSchema).query(({ input }) => {
    return getUserById(input.id)
  })
})
