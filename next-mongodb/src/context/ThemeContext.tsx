import React from 'react'

import { ThemeProvider } from 'styled-components'

import useSettings from '../hooks/useSettings'
import themes from '../styles/themes'

export default function ThemesProvider({ children }) {
  const { settings } = useSettings()

  const theme = themes.find(t => t.title === settings.theme)

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
