import { Urbanist } from 'next/font/google'
import type { Metadata } from 'next'

import Footer from '@/components/footer'
import ModalProvider from '@/providers/modal-provider'
import Navbar from '@/components/navbar'
import ToastProvider from '@/providers/toast-provider'

import './globals.css'

const font = Urbanist({ subsets: ['latin'] })

export const revalidate = 0;

export const metadata: Metadata = {
  metadataBase: new URL("https://batuhirdavat.com/"),
  title: {
    default: "Ankara Toptan Hırdavat, Türkiye'nin Tek Adresi | New Ba&Tu Hırdavat",
    template: `%s | New Ba&Tu`
  },
  description: " Tüm Türkiye'ye hizmet veriyoruz. Dilediğiniz ürünleri seçin ve bizi arayın. Sizin için hazırlayacağımız fiyat listesini size gönderelim. En ucuza En Kaliteli Toptan Hırdavat | New Ba&Tu Hırdavat ",
  openGraph: {
    title: "Ankara Toptan Hırdavat, Türkiye'nin Tek Adresi | New Ba&Tu Hırdavat",
    description: " Tüm Türkiye'ye hizmet veriyoruz. Dilediğiniz ürünleri seçin ve bizi arayın. Sizin için hazırlayacağımız fiyat listesini size gönderelim. En ucuza En Kaliteli Toptan Hırdavat | New Ba&Tu Hırdavat ",
  }
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
