import '../styles/global.css'
import { ReactNode } from 'react'

import { NextAuthProvider } from '@/components/Providers/NextAuthProvider'
import { TRPCProvider } from '@/components/Providers/TRPCProvider'
import { ThemesProvider } from '@/hooks/useTheme'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next app with Next Auth and TRPC'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.className} h-full scroll-smooth antialiased`}>
      <body className="theme-dark bg-skin-fill">
        <TRPCProvider>
          <NextAuthProvider>
            <ThemesProvider>
              <div className="p-20 text-skin-base">{children}</div>
            </ThemesProvider>
          </NextAuthProvider>
        </TRPCProvider>
      </body>
    </html>
  )
}
