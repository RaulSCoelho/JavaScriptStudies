'use client'

import { trpc } from '@/utils/trpc-provider'

export default function Home() {
  const { data } = trpc.users.getById.useQuery({ id: 0 })

  return (
    <div>
      <h1>Hello {data?.name}</h1>
    </div>
  )
}
