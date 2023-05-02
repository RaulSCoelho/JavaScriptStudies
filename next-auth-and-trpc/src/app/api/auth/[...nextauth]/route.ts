import { env } from '@/env'
import clientPromise from '@/server/database'
import { signIn } from '@/server/lib/auth'
import { MongoDBAdapter } from '@next-auth/mongodb-adapter'
import { AuthOptions } from 'next-auth'
import NextAuth from 'next-auth/next'
import CredentialsProvider from 'next-auth/providers/credentials'
import EmailProvider from 'next-auth/providers/email'
import GoogleProvider from 'next-auth/providers/google'

export const authOptions: AuthOptions = {
  secret: env.NEXTAUTH_SECRET,
  providers: [
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
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        login: { label: 'Login', type: 'text', placeholder: 'username or email address' },
        password: { label: 'Password', type: 'password', placeholder: 'password' }
      },
      async authorize(credentials, req): Promise<any> {
        try {
          const { user, error } = await signIn(credentials?.login!, credentials?.password!)
          if (error) throw new Error(error)
          return { id: user?._id.toString(), name: user?.username, email: user?.email }
        } catch (error) {
          return null
        }
      }
    })
  ],
  adapter: MongoDBAdapter(clientPromise),
  session: { strategy: 'jwt' }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
