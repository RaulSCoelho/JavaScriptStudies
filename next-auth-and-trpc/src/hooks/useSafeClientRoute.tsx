import { useSession } from 'next-auth/react'
import { redirect as nextRedirect } from 'next/navigation'

interface SafeClientRouteProps {
  redirect?: string
}

export async function useSafeClientRoute({ redirect = '/' }: SafeClientRouteProps = { redirect: '/' }) {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      nextRedirect('/signin?callbackUrl=' + redirect)
    }
  })
  const isLoading = status === 'loading'
  const isAuthenticated = status === 'authenticated'

  return { session, status, isLoading, isAuthenticated }
}
