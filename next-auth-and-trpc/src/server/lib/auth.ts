import { User } from '@/types/users'
import { TRPCError } from '@trpc/server'

import { connectToDatabase } from '../database'
import { findOne } from '../database/base'
import { isHashValid } from './hash'

export async function signIn(login: string, password: string) {
  let user: User | undefined
  let error: any

  try {
    const { db } = await connectToDatabase()
    // Check if the user is already on DB
    const found = await findOne<User>({ db, collection: 'users', search: [{ username: login }, { email: login }] })

    if (!found) {
      throw new TRPCError({ code: 'BAD_REQUEST', message: 'Invalid username or password' })
    }

    // Check if the password is correct
    const validPass = await isHashValid(password, found.password)
    if (!validPass) {
      throw new TRPCError({ code: 'BAD_REQUEST', message: 'Invalid username or password' })
    }

    // Remove the password from the response
    found.password = undefined as any

    user = found
  } catch (err) {
    error = err
  }

  return { user, error }
}
