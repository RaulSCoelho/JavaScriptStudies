import z from 'zod'

export interface LoginRequest {
  login: string
  password: string
}

export const genders = (['male', 'female'] as const).map(role => role)
export type Gender = (typeof genders)[number]

export const userSchema = z.object({
  _id: z.string(),
  name: z.string().min(6, 'Name must have at least 6 characters.').max(50, 'Name must be between 6 and 50 characters.'),
  username: z
    .string()
    .min(6, 'Userame must have at least 6 characters.')
    .max(30, 'Userame must be between 6 and 30 characters.'),
  password: z
    .string()
    .min(6, 'Password must have at least 6 characters.')
    .max(30, 'Password must be between 6 and 30 characters.'),
  email: z.string().email(),
  phone_number: z
    .string()
    .min(10, 'Phone number must have at least 10 characters.')
    .max(21, 'Phone number must be between 10 and 21 characters.'),
  birth_date: z.date(),
  gender: z.custom<Gender>(),
  createdAt: z.date().default(new Date()).optional(),
  is_admin: z.boolean().default(false).optional()
})

export const userPartialSchema = userSchema.partial()
export type User = z.infer<typeof userSchema>
export type UserPartial = z.infer<typeof userPartialSchema>
export type CreateUser = Omit<User, '_id'>
