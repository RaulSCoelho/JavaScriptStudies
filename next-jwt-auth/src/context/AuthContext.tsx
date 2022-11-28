import { createContext } from 'react'

type User = {
  name: string
  email: string
  avatar_url: string
}

type SignInData = {
  email: string
  password: string
}

type AuthContextType = {
  isAuthenticated: boolean
  user: User
  signIn: (data: SignInData) => Promise<void>
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }) {
  const isAuthenticated = false
  const user = null

  async function signIn({ email, password }: SignInData) {}

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, signIn }}>
      {children}
    </AuthContext.Provider>
  )
}
