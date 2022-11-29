import { createContext, useEffect, useState } from 'react'

import Router from 'next/router'
import { parseCookies, setCookie } from 'nookies'

import { api } from '../services/api'
import { recoverUserInformation, signInRequest } from '../services/auth'

type User = {
  name: string
  username: string
  avatar_url: string
}

type SignInData = {
  username: string
  password: string
}

type AuthContextType = {
  isAuthenticated: boolean
  user: User
  signIn: (data: SignInData) => Promise<void>
}

export const AuthContext = createContext({} as AuthContextType)

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState<User>(null)
  const isAuthenticated = !!user

  useEffect(() => {
    const { 'nextauth-token': token } = parseCookies()

    if (token) {
      recoverUserInformation(token)
        .then(res => {
          setUser(res.user)
          if (Router.pathname !== '/dashboard') Router.push('/dashboard')
        })
        .catch(err => {
          console.log(err.message)
          if (Router.pathname !== '/') Router.push('/')
        })
    }
  }, [])

  async function signIn({ username, password }: SignInData) {
    const { token, user } = await signInRequest({
      username,
      password,
    })

    setCookie(undefined, 'nextauth-token', token, {
      maxAge: 60 * 60 * 1, // 1 hour
    })

    api.defaults.headers.Authorization = `Bearer ${token}`

    setUser(user)

    Router.push('/dashboard')
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, signIn }}>
      {children}
    </AuthContext.Provider>
  )
}
