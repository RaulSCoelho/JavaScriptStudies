import { User } from '@/types/users'
import { TRPCError, initTRPC } from '@trpc/server'
import { CreateNextContextOptions } from '@trpc/server/adapters/next'
import { Db } from 'mongodb'
import superjson from 'superjson'
import { ZodError } from 'zod'

import { connectToDatabase } from './database'

export type CreateContextOptions = {
  user?: User
  db: Db
}

export async function createTRPCContext(opts: CreateNextContextOptions): Promise<CreateContextOptions> {
  const { db } = await connectToDatabase()
  return { db }
}

const t = initTRPC.context<typeof createTRPCContext>().create({
  transformer: superjson,
  errorFormatter({ shape, error }) {
    return {
      ...shape,
      data: {
        ...shape.data,
        zod: error.cause instanceof ZodError ? error.cause.flatten().fieldErrors : null
      }
    }
  }
})

export const createTRPCRouter = t.router
export const publicProcedure = t.procedure

const isAuthed = t.middleware(({ ctx, next }) => {
  if (!ctx.user || !ctx.user._id) {
    throw new TRPCError({ code: 'UNAUTHORIZED' })
  }
  return next({
    ctx: { user: ctx.user }
  })
})

export const protectedProcedure = t.procedure.use(isAuthed)
