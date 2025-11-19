import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Portfolio - BCA Graduate Frontend Developer',
  description: 'Portfolio website of a final year BCA graduate student aspiring to be a frontend developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors">
        <script
          dangerouslySetInnerHTML={{
            __html: `if (localStorage.getItem('theme') === 'dark') document.documentElement.classList.add('dark')`,
          }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}