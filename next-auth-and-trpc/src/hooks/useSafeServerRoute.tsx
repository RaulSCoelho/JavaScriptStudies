import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth'
import { redirect as nextRedirect } from 'next/navigation'

interface SafeServerRouteProps {
  redirect?: string
}

export async function useSafeServerRoute({ redirect = '/' }: SafeServerRouteProps = { redirect: '/' }) {
  const session = await getServerSession(authOptions)
  if (!session) {
    nextRedirect('/signin?callbackUrl=' + redirect)
  }
  return session
}
