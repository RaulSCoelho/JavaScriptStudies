'use client'

import { useTheme } from '@/hooks/useTheme'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'

export function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme()
  const className = 'cursor-pointer text-gray-100'

  return theme === 'dark' ? (
    <DarkModeOutlinedIcon className={className} onClick={toggleTheme} />
  ) : (
    <LightModeOutlinedIcon className={className} onClick={toggleTheme} />
  )
}
