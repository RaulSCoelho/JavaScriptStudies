import { DefaultSession } from 'next-auth'
import { DefaultJWT } from 'next-auth/jwt'

import { User as CustomUser } from './users'

/* eslint-disable no-unused-vars */
declare module 'next-auth' {
  interface Session extends DefaultSession {
    user: CustomUser
  }

  interface User extends CustomUser {}
}

declare module 'next-auth/jwt' {
  interface JWT extends DefaultJWT {
    _id: string
    is_admin?: boolean
  }
}
