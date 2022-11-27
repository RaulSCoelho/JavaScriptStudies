import React, { useCallback } from 'react'

import { DefaultTheme, ThemeProvider } from 'styled-components'
import Header from 'ThemeSwitcher/components/Header'
import GlobalStyles from 'ThemeSwitcher/styles/global'
import dark from 'ThemeSwitcher/styles/themes/dark'
import light from 'ThemeSwitcher/styles/themes/light'
import usePersistedState from 'ThemeSwitcher/utils/usePersistedState'

export const ThemeSwitcher: React.FC = () => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light)

  const toggleTheme = useCallback(() => {
    setTheme(theme.title === 'light' ? dark : light)
  }, [setTheme, theme.title])

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Header toggleTheme={toggleTheme} />
        <GlobalStyles />
      </div>
    </ThemeProvider>
  )
}
