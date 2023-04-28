import z from 'zod'

export const genders = (['male', 'female'] as const).map(role => role)
export type Gender = (typeof genders)[number]

export const userSchema = z.object({
  _id: z.number(),
  name: z.string().min(6, 'Name must have at least 6 characters.').max(50, 'Name must be between 6 and 50 characters.')
})

export type User = z.infer<typeof userSchema>
