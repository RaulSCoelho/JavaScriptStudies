import React from 'react'

import { SettingsProvider, ThemesProvider } from 'context'
import { parseCookies } from 'nookies'
import GlobalStyle from 'styles'

export default function App({ Component, pageProps, cookies }) {
  return (
    <SettingsProvider cookies={cookies}>
      <ThemesProvider>
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemesProvider>
    </SettingsProvider>
  )
}

App.getInitialProps = ({ ctx }) => {
  const cookies = parseCookies(ctx)

  return { cookies }
}
