import { userCreationSchema, userPartialSchema } from '@/types/users'
import { z } from 'zod'

import { createUser, deleteUser, getAllUsers, getUserById, updateUser } from '../lib/users'
import { createTRPCRouter, protectedProcedure, publicProcedure } from '../trpc'

const userIdSchema = z.object({
  _id: z.string()
})
const userUpdateSchema = userIdSchema.extend({
  user: userPartialSchema
})

export const usersRouter = createTRPCRouter({
  create: protectedProcedure.input(userCreationSchema).mutation(async ({ ctx, input }) => {
    return await createUser(ctx, input)
  }),
  getAll: publicProcedure.query(async ({ ctx }) => {
    return await getAllUsers(ctx)
  }),
  getById: protectedProcedure.input(userIdSchema).query(async ({ ctx, input }) => {
    return await getUserById(ctx, input._id)
  }),
  update: protectedProcedure.input(userUpdateSchema).mutation(async ({ ctx, input }) => {
    return await updateUser(ctx, input._id, input.user)
  }),
  delete: protectedProcedure.input(userIdSchema).mutation(async ({ ctx, input }) => {
    return await deleteUser(ctx, input._id)
  })
})
