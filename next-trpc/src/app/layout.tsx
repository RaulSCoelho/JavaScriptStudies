import './globals.css'
import { ReactNode } from 'react'

import { TRPCProvider } from '@/utils/trpc-provider'

export const metadata = {
  title: 'Create Next App With TRPC'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <TRPCProvider>
      <html lang="en">
        <body className="flex h-screen flex-col items-center justify-center bg-app">{children}</body>
      </html>
    </TRPCProvider>
  )
}
