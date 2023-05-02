'use client'
import { ReactNode, createContext, useContext, useState, useEffect } from 'react'

type Theme = 'default' | 'dark'

type ThemesContextProps = {
  theme: Theme
  toggleTheme: () => void
}

const ThemesContext = createContext({} as ThemesContextProps)

export function ThemesProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark')

  const toggleTheme = () => {
    setTheme(theme === 'default' ? 'dark' : 'default')
  }

  useEffect(() => {
    const body = document.querySelector('body') as HTMLBodyElement
    body.classList.toggle('theme-dark', theme === 'dark')
  }, [theme])

  return <ThemesContext.Provider value={{ theme, toggleTheme }}>{children}</ThemesContext.Provider>
}

export function useTheme(): ThemesContextProps {
  return useContext(ThemesContext)
}
