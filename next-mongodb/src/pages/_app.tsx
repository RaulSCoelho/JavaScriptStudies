import React from 'react'

import { parseCookies } from 'nookies'

import SettingsProvider from '../context/SettingsContext'
import ThemesProvider from '../context/ThemeContext'
import { UserProvider } from '../context/UserContext'
import GlobalStyle from '../styles'

export default function App({ Component, pageProps, cookies }) {
  return (
    <SettingsProvider cookies={cookies}>
      <ThemesProvider>
        <UserProvider>
          <Component {...pageProps} />
          <GlobalStyle />
        </UserProvider>
      </ThemesProvider>
    </SettingsProvider>
  )
}

App.getInitialProps = ({ ctx }) => {
  const cookies = parseCookies(ctx)

  return { cookies }
}
