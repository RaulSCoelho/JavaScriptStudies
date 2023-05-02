import { TRPCError, initTRPC } from '@trpc/server'
import { CreateNextContextOptions } from '@trpc/server/adapters/next'
import { Db } from 'mongodb'
import { Session } from 'next-auth'
import superjson from 'superjson'
import { ZodError } from 'zod'

import { getServerAuthSession } from './auth'
import { connectToDatabase } from './database'

export type CreateContextOptions = {
  session: Session | null
  db: Db
}

export async function createTRPCContext(opts: CreateNextContextOptions): Promise<CreateContextOptions> {
  const { req, res } = opts
  const { db } = await connectToDatabase()
  const session = await getServerAuthSession({ req, res })
  console.log(session)
  return {
    session,
    db
  }
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
  if (!ctx.session || !ctx.session.user) {
    throw new TRPCError({ code: 'UNAUTHORIZED' })
  }
  return next({
    ctx: {
      // infers the `session` as non-nullable
      session: { ...ctx.session, user: ctx.session.user }
    }
  })
})

export const protectedProcedure = t.procedure.use(isAuthed)
