import { Urbanist } from 'next/font/google'
import type { Metadata } from 'next'

import Footer from '@/components/footer'
import ModalProvider from '@/providers/modal-provider'
import Navbar from '@/components/navbar'
import ToastProvider from '@/providers/toast-provider'

import './globals.css'

const font = Urbanist({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL("https://batuhirdavat.com/"),
  title: {
    default: 'New Ba&Tu Hırdavat',
    template: `%s | New Ba&Tu`
  },
  description: " En Uygun Fiyatlı Toptan Hırdavat | New Ba&Tu Hırdavat ",
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
