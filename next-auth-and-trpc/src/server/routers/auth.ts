import { signInSchema } from '@/types/auth'

import { createTRPCRouter, publicProcedure } from '../trpc'

export const authRouter = createTRPCRouter({
  signIn: publicProcedure.input(signInSchema).mutation(async ({ ctx, input }) => {
    return null
  })
})
