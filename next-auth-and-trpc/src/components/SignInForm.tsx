'use client'
import { useForm } from 'react-hook-form'

import { SignInRequest, signInSchema } from '@/types/auth'
import { zodResolver } from '@hookform/resolvers/zod'
import { Alert } from '@mui/material'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import { signIn } from 'next-auth/react'
import { useSearchParams } from 'next/navigation'

export function SignInForm() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<SignInRequest>({ resolver: zodResolver(signInSchema) })
  const query = useSearchParams()

  async function onSubmit({ login, password }: SignInRequest) {
    signIn('credentials', { login, password, callbackUrl: query?.get('callbackUrl') || '/' })
  }

  const error = Object.keys(errors).length > 0 ? Object.values(errors)[0].message : null

  return (
    <div className="flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-skin-base">Log in to your account</h2>
        </div>
        <form className="mt-8 space-y-4" onSubmit={handleSubmit(onSubmit)}>
          {error && <Alert severity="error">{error}</Alert>}
          <div className="-space-y-px rounded-md shadow-sm">
            <input
              type="text"
              className="w-full rounded-t-md border border-gray-300 px-3 py-2 text-skin-inverted outline-none sm:text-sm"
              placeholder="Username or email address"
              autoComplete="username"
              {...register('login')}
            />
            <input
              type="password"
              className="w-full rounded-b-md border border-gray-300 px-3 py-2 text-skin-inverted outline-none sm:text-sm"
              placeholder="Password"
              autoComplete="current-password"
              {...register('password')}
            />
          </div>
          <div className="flex items-center justify-between">
            <FormControlLabel
              control={<Checkbox id="remember-me" name="remember-me" defaultChecked />}
              label="Remember me"
            />
            <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
              Forgot your password?
            </a>
          </div>
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md border-0 bg-skin-fill-primary px-4 py-2 text-sm font-medium text-white outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
