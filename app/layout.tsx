import { Urbanist } from 'next/font/google'
import type { Metadata } from 'next'

import Footer from '@/components/footer'
import ModalProvider from '@/providers/modal-provider'
import Navbar from '@/components/navbar'
import ToastProvider from '@/providers/toast-provider'

import './globals.css'

const font = Urbanist({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'New Ba&Tu Hırdavat',
  description: 'New Ba&Tu Hırdavat',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ModalProvider />
        <ToastProvider />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
