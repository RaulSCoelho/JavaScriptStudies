import { userPartialSchema, userSchema } from '@/types/users'
import { z } from 'zod'

import { createUser, deleteUser, getAllUsers, getUserById, loginUser, updateUser } from '../lib/users'
import { createTRPCRouter, publicProcedure } from '../trpc'

const userIdSchema = z.object({
  _id: z.string()
})
const userLoginSchema = z.object({
  login: z.string(),
  password: z.string()
})
const userUpdateSchema = userIdSchema.extend({
  user: userPartialSchema
})

export const usersRouter = createTRPCRouter({
  create: publicProcedure.input(userSchema.omit({ _id: true })).mutation(async ({ ctx, input }) => {
    return await createUser(ctx, input)
  }),
  login: publicProcedure.input(userLoginSchema).query(async ({ ctx, input }) => {
    return await loginUser(ctx, input)
  }),
  getAll: publicProcedure.query(async ({ ctx }) => {
    return await getAllUsers(ctx)
  }),
  getById: publicProcedure.input(userIdSchema).query(async ({ ctx, input }) => {
    return await getUserById(ctx, input._id)
  }),
  update: publicProcedure.input(userUpdateSchema).query(async ({ ctx, input }) => {
    return await updateUser(ctx, input._id, input.user)
  }),
  delete: publicProcedure.input(userIdSchema).query(async ({ ctx, input }) => {
    return await deleteUser(ctx, input._id)
  })
})
