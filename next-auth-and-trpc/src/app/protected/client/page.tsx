'use client'
import { useSafeClientRoute } from '@/hooks/useSafeClientRoute'
import { signOut } from 'next-auth/react'

export default async function ProtectedClient() {
  const { session, status } = await useSafeClientRoute({ redirect: '/protected/client' })

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex gap-4">
        <a href="/" className="rounded bg-blue-500 px-4 py-2 font-medium text-white hover:bg-blue-600">
          Home
        </a>
        <button
          onClick={() => signOut({ callbackUrl: '/' })}
          className="cursor-pointer rounded bg-blue-500 px-4 py-2 font-medium text-white hover:bg-blue-600"
        >
          Logout
        </button>
      </div>
      <h1>{status}</h1>
      {session && <h1>{JSON.stringify(session, null, 2)}</h1>}
    </div>
  )
}
