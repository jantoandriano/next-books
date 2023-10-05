import './globals.css'
import type { Metadata } from 'next'
import Providers from './_utils/provider'

export const metadata: Metadata = {
  title: 'Books App',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
