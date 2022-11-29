import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'

import { AuthContext } from '../../context/AuthContext'
import { SignInFormStyle } from './styles'

export const SignInForm: React.FC = () => {
  const { register, handleSubmit } = useForm()
  const { signIn } = useContext(AuthContext)

  async function handleSignIn(data) {
    await signIn(data)
  }

  return (
    <SignInFormStyle>
      <h1>Sign in to your account</h1>
      <form onSubmit={handleSubmit(handleSignIn)}>
        <input
          {...register('username')}
          type="text"
          name="username"
          placeholder="Username"
          required
        />
        <input
          {...register('password')}
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <br />
        <button type="submit">Sign In</button>
      </form>
    </SignInFormStyle>
  )
}
