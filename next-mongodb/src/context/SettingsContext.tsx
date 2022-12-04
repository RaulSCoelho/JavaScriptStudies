import React, { createContext, useEffect, useState } from 'react'

import { parseCookies, setCookie } from 'nookies'

type Settings = {
  theme: 'Light Mode' | 'Dark Mode'
}

type SettingsContextType = {
  settings: Settings
  setSettings: (config: Settings) => void
  onToggleTheme: () => void
}

export const SettingsContext = createContext({} as SettingsContextType)

const defaultSettings: Settings = {
  theme: 'Light Mode'
}

const restoreSettings = (cookies): Settings => {
  const { settings: storedData } = cookies
  if (storedData) {
    return JSON.parse(storedData)
  }
  return defaultSettings
}

const storeSettings = (settings: Settings) => {
  setCookie(undefined, 'settings', JSON.stringify(settings), {
    maxAge: 2147483647
  })
}

export default function SettingsProvider({ children, cookies }) {
  const [settings, setSettings] = useState<Settings>(restoreSettings(cookies))

  useEffect(() => {
    const cookies = parseCookies()
    const restoredSettings = restoreSettings(cookies)

    if (restoredSettings) {
      setSettings(restoredSettings)
    }
  }, [])

  useEffect(() => {
    if (settings) {
      storeSettings(settings)
    }
  }, [settings])

  const onToggleTheme = () => {
    setSettings(prev => ({
      ...prev,
      theme: prev.theme === 'Light Mode' ? 'Dark Mode' : 'Light Mode'
    }))
  }

  return (
    <SettingsContext.Provider value={{ settings, setSettings, onToggleTheme }}>
      {children}
    </SettingsContext.Provider>
  )
}
