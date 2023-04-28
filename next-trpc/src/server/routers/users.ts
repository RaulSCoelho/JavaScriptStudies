import { z } from 'zod'

import { createTRPCRouter, publicProcedure } from '../trpc'

export const usersRouter = createTRPCRouter({
  getById: publicProcedure
    .input(
      z.object({
        id: z.number()
      })
    )
    .query(({ input }) => {
      const users = [
        { id: 0, name: 'Raul' },
        { id: 1, name: 'Aline' },
        { id: 2, name: 'Andrey' },
        { id: 3, name: 'Caio' }
      ]

      return users.find(u => u.id === input.id)
    })
})
