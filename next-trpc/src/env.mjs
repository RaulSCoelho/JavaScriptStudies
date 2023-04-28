import { z } from 'zod'

const server = z.object({
  PORT: z.string(),
  VERCEL_URL: z.string(),
  NODE_ENV: z.enum(['development', 'test', 'production']),
  MONGODB_URI: z.string().url(),
  MONGODB_DB: z.string(),
  MONGODB_USER: z.string(),
  MONGODB_PASSWORD: z.string(),
  TOKEN_SECRET: z.string(),
  MY_AWS_SECRET_KEY: z.string(),
  MY_AWS_ACCESS_KEY: z.string(),
  MY_AWS_BUCKET: z.string(),
  MY_AWS_REGION: z.string()
})

const client = z.object({
  NEXT_PUBLIC_HOST: z.string(),
  NEXT_PUBLIC_PAYPAL_CLIENT_ID: z.string(),
  NEXT_PUBLIC_PAYPAL_CLIENT_SECRET: z.string()
})

const processEnv = {
  PORT: process.env.PORT,
  VERCEL_URL: process.env.VERCEL_URL,
  NODE_ENV: process.env.NODE_ENV,
  MONGODB_URI: process.env.MONGODB_URI,
  MONGODB_DB: process.env.MONGODB_DB,
  MONGODB_USER: process.env.MONGODB_USER,
  MONGODB_PASSWORD: process.env.MONGODB_PASSWORD,
  TOKEN_SECRET: process.env.TOKEN_SECRET,
  MY_AWS_SECRET_KEY: process.env.MY_AWS_SECRET_KEY,
  MY_AWS_ACCESS_KEY: process.env.MY_AWS_ACCESS_KEY,
  MY_AWS_BUCKET: process.env.MY_AWS_BUCKET,
  MY_AWS_REGION: process.env.MY_AWS_REGION,
  NEXT_PUBLIC_HOST: process.env.NEXT_PUBLIC_HOST,
  NEXT_PUBLIC_PAYPAL_CLIENT_ID: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
  NEXT_PUBLIC_PAYPAL_CLIENT_SECRET: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_SECRET
}

// Don't touch the part below
// --------------------------

const merged = server.merge(client)
/** @type z.infer<merged>
 *  @ts-ignore - can't type this properly in jsdoc */
let env = process.env

if (!!process.env.SKIP_ENV_VALIDATION === false) {
  const isServer = typeof window === 'undefined'

  const parsed = isServer
    ? merged.safeParse(processEnv) // on server we can validate all env vars
    : client.safeParse(processEnv) // on client we can only validate the ones that are exposed

  if (parsed.success === false) {
    console.error('❌ Invalid environment variables:', parsed.error.flatten().fieldErrors)
    throw new Error('Invalid environment variables')
  }

  /** @type z.infer<merged>
   *  @ts-ignore - can't type this properly in jsdoc */
  env = new Proxy(parsed.data, {
    get(target, prop) {
      if (typeof prop !== 'string') return undefined
      // Throw a descriptive error if a server-side env var is accessed on the client
      // Otherwise it would just be returning `undefined` and be annoying to debug
      if (!isServer && !prop.startsWith('NEXT_PUBLIC_'))
        throw new Error(
          process.env.NODE_ENV === 'production'
            ? '❌ Attempted to access a server-side environment variable on the client'
            : `❌ Attempted to access server-side environment variable '${prop}' on the client`
        )
      /*  @ts-ignore - can't type this properly in jsdoc */
      return target[prop]
    }
  })
}

export { env }
