'use client'

import { signOut } from 'next-auth/react'

export function SignOut() {
  return (
    <button
      onClick={() => signOut({ callbackUrl: '/' })}
      className="cursor-pointer rounded bg-blue-500 px-4 py-2 font-medium text-white hover:bg-blue-600"
    >
      Logout
    </button>
  )
}
