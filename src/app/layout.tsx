import type { Metadata } from 'next'
import '@/style/globals.css'

import "tw-elements/dist/css/tw-elements.min.css";

export const metadata: Metadata = {
  title: 'Raices - plantas de interior',
  description: 'Tienda online de plantas de interior',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='flex flex-col min-h-screen'>
        {children}
      </body>
    </html>
  )
}
