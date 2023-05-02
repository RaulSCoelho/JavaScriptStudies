import { DefaultSession } from 'next-auth'

import { User as CustomUser } from './users'

/* eslint-disable no-unused-vars */
declare module 'next-auth' {
  interface Session extends DefaultSession {
    user: CustomUser
  }

  interface User extends CustomUser {}
}

declare module 'next-auth/jwt' {
  interface JWT {
    user: {
      _id: string
      name: string
      username: string
      email: string
      is_admin?: boolean
    }
  }
}
