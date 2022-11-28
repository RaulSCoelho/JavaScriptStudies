import React from 'react'

import { AuthProvider } from './AuthContext'

const AppContext = ({ children }) => {
  return <AuthProvider>{children}</AuthProvider>
}

export default AppContext
