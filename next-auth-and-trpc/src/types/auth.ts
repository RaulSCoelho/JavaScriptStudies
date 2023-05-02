import { z } from 'zod'

export const signInSchema = z.object({
  login: z
    .string()
    .nonempty('Please enter a username or email address.')
    .min(6, 'Username or email address must be at least 6 characters.'),
  password: z
    .string()
    .nonempty('Please enter a password.')
    .min(6, 'Password must be at least 6 characters.')
    .max(30, 'Password must be at most 30 characters.')
})

export type SignInRequest = z.infer<typeof signInSchema>
