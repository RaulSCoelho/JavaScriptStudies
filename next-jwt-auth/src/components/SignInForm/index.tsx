import React from 'react'

import { SignInFormStyle } from './styles'

export const SignInForm: React.FC = () => {
  return (
    <SignInFormStyle>
      <h1>Sign in to your account</h1>
      <form>
        <input type="text" name="username" />
        <input type="text" name="password" />
        <br />
        <button>Sign In</button>
      </form>
    </SignInFormStyle>
  )
}
