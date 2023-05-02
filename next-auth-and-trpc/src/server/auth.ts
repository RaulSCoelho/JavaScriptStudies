import { env } from '@/env'
import { MongoDBAdapter } from '@next-auth/mongodb-adapter'
import type { GetServerSidePropsContext } from 'next'
import { getServerSession, AuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import EmailProvider from 'next-auth/providers/email'
import GoogleProvider from 'next-auth/providers/google'

import clientPromise from './database'
import { signIn } from './lib/auth'

export const authOptions: AuthOptions = {
  secret: env.NEXTAUTH_SECRET,
  callbacks: {
    session({ session, token }) {
      if (token) {
        session.user = { ...token.user } as any
      }
      return session
    },
    jwt({ user, token }) {
      if (user) {
        token.user = {} as any
        token.user._id = user._id
        token.user.name = user.name ?? ''
        token.user.username = user.username
        token.user.email = user.email ?? ''
        token.user.is_admin = user.is_admin
      }
      return token
    }
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        login: { label: 'Login', type: 'text', placeholder: 'username or email address' },
        password: { label: 'Password', type: 'password', placeholder: 'password' }
      },
      async authorize(credentials): Promise<any> {
        try {
          const { user, error } = await signIn(credentials?.login!, credentials?.password!)
          if (error) throw error
          return user
        } catch (error) {
          return null
        }
      }
    }),
    GoogleProvider({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET
    }),
    EmailProvider({
      server: {
        host: env.NODEMAILER_HOST,
        port: env.NODEMAILER_PORT,
        auth: {
          user: env.NODEMAILER_USER,
          pass: env.NODEMAILER_PASS
        }
      },
      from: env.NODEMAILER_FROM
    })
  ],
  pages: {
    signIn: '/signin'
  },
  adapter: MongoDBAdapter(clientPromise),
  session: { strategy: 'jwt' }
}

export const getServerAuthSession = (ctx: {
  req: GetServerSidePropsContext['req']
  res: GetServerSidePropsContext['res']
}) => {
  return getServerSession(ctx.req, ctx.res, authOptions)
}
