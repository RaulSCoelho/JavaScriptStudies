import { appRouter } from '@/server/routers/_app'
import { createTRPCContext } from '@/server/trpc'
import * as trpcNext from '@trpc/server/adapters/next'

export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext: createTRPCContext
})
