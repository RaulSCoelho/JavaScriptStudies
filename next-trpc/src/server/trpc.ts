import { TRPCError, initTRPC } from '@trpc/server'
import { CreateNextContextOptions } from '@trpc/server/adapters/next'
import superjson from 'superjson'
import { ZodError } from 'zod'

type CreateContextOptions = {
  user: {
    name: string
  } | null
}

export function createTRPCContext(opts: CreateNextContextOptions): CreateContextOptions {
  const user = {
    name: 'Raul'
  }

  return {
    user
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
  if (!ctx.user || !ctx.user.name) {
    throw new TRPCError({ code: 'UNAUTHORIZED' })
  }
  return next({
    ctx: { user: ctx.user }
  })
})

export const protectedProcedure = t.procedure.use(isAuthed)
