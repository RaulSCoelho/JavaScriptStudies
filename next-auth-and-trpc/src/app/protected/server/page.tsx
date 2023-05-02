import { SignOut } from '@/components/SignOut'
import { useSafeServerRoute } from '@/hooks/useSafeServerRoute'

export default async function ProtectedServer() {
  const session = await useSafeServerRoute({ redirect: '/protected/server' })

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex gap-4">
        <a href="/" className="rounded bg-blue-500 px-4 py-2 font-medium text-white hover:bg-blue-600">
          Home
        </a>
        <SignOut />
      </div>
      {session && <h1>{JSON.stringify(session, null, 2)}</h1>}
    </div>
  )
}
