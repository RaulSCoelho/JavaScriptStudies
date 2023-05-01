import { CreateUser, LoginRequest, User, UserPartial } from '@/types/users'
import { TRPCError } from '@trpc/server'

import { findAll, findOneById, insertOne, updateOne, deleteOneById, findOne } from '../database/base'
import { CreateContextOptions } from '../trpc'
import { hashWord, isHashValid } from './hash'

// USER CREATION
export async function createUser(ctx: CreateContextOptions, user: CreateUser): Promise<User> {
  const { db } = ctx
  // Check if the user is already on DB
  const existingUser = await findOne<User>({
    db,
    collection: 'users',
    search: [{ username: user.username }, { email: user.email }]
  })

  if (existingUser?.username === user.username)
    throw new TRPCError({ code: 'BAD_REQUEST', message: 'User with this username already exists.' })

  if (existingUser?.email === user.email)
    throw new TRPCError({ code: 'BAD_REQUEST', message: 'User with this email address already exists.' })

  // Hash the password
  const hashedPassword = await hashWord(user.password)
  user.password = hashedPassword

  const created = await insertOne<User>({ db, collection: 'users', data: user })
  return created
}

// USER LOGIN
export async function loginUser(ctx: CreateContextOptions, { login, password }: LoginRequest): Promise<User> {
  const { db } = ctx
  // Check if the user is already on DB
  const user = await findOne<User>({ db, collection: 'users', search: [{ username: login }, { email: login }] })

  if (!user) {
    throw new TRPCError({ code: 'BAD_REQUEST', message: 'Invalid username or password' })
  }

  // Check if the password is correct
  const validPass = await isHashValid(password, user.password)
  if (!validPass) {
    throw new TRPCError({ code: 'BAD_REQUEST', message: 'Invalid username or password' })
  }

  // Remove the password from the response
  user.password = undefined as any

  return user
}

// GET ALL USERS
export async function getAllUsers(ctx: CreateContextOptions): Promise<User[]> {
  const { db } = ctx
  const users = await findAll<User>({ db, collection: 'users', projection: { password: 0 } })
  return users
}

// GET USER BY ID
export async function getUserById(ctx: CreateContextOptions, _id: string, showPassword = false): Promise<User> {
  const { db } = ctx
  const projection: any = {}
  if (!showPassword) projection.password = 0

  const user = await findOneById<User>({ db, collection: 'users', _id, projection })
  if (!user) {
    throw new TRPCError({ code: 'NOT_FOUND', message: 'User not found.' })
  }
  return user
}

// UPDATE USER
export async function updateUser(ctx: CreateContextOptions, _id: string, user: UserPartial): Promise<User> {
  const { db } = ctx
  // Check the data to see if its changing the password, and if so, hash it
  if (user.password) user.password = await hashWord(user.password)

  const updated = await updateOne<User>({
    db,
    collection: 'users',
    _id,
    data: user,
    projection: { password: 0 }
  })
  return updated
}

// DELETE USER
export async function deleteUser(ctx: CreateContextOptions, _id: string) {
  const { db } = ctx
  const deleted = await deleteOneById({ db, collection: 'users', _id })
  return deleted
}
