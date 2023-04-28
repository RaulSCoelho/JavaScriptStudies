import { User } from '@/types/users'
import { TRPCError } from '@trpc/server'

export function getAllUsers(): User[] {
  const users = [
    { _id: 0, name: 'Raul' },
    { _id: 1, name: 'Aline' },
    { _id: 2, name: 'Andrey' },
    { _id: 3, name: 'Caio' }
  ]

  return users
}

export function getUserById(id: number): User {
  const user = getAllUsers().find(u => u._id === id)
  if (!user) {
    throw new TRPCError({ code: 'NOT_FOUND' })
  }
  return user
}
