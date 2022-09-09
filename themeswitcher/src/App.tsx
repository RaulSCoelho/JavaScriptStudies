import { useCallback } from 'react'

import { ThemeProvider, DefaultTheme } from 'styled-components'

import Header from './components/Header'
import GlobalStyles from './styles/global'
import dark from './styles/themes/dark'
import light from './styles/themes/light'
import usePersistedState from './utils/usePersistedState'

function App() {
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

export default App
