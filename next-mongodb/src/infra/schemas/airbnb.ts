import { z } from 'zod'

export const roomSchema = z.object({
  _id: z.string(),
  name: z.string(),
  image: z.string(),
  address: z.object({}),
  summary: z.string(),
  guests: z.number(),
  price: z.string().transform(price => Number(price))
})

export type RoomSchemaInput = z.input<typeof roomSchema>
export type RoomSchemaOutput = z.output<typeof roomSchema>
