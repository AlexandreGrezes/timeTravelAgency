import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Chatbot from '@/components/Chatbot'

export const metadata: Metadata = {
  title: 'TimeTravel Agency — Voyagez au-delà du temps',
  description: 'Découvrez des époques extraordinaires avec TimeTravel Agency. Paris 1889, Florence 1504, Crétacé -65M.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="dark">
      <body className="bg-[#050508] text-stone-200 antialiased">
        <Header />
        <main>{children}</main>
        <Chatbot />
      </body>
    </html>
  )
}
