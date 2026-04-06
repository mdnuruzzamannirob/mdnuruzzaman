import { Header } from '@/components/Header'
import { ThemeProvider } from '@/components/ThemeProvider'
import type { Metadata } from 'next'
import { Baloo_Da_2 } from 'next/font/google'
import { ToastContainer } from 'react-toastify'
import './globals.css'

const balooDa2 = Baloo_Da_2({
  variable: '--font-baloo-da-2',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Md. Nuruzzaman | Portfolio',
  description: 'Frontend Developer, UX Architect, and JavaScript Engineer',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${balooDa2.className} h-full antialiased`}
    >
      <body
        suppressHydrationWarning
        className="min-h-screen flex flex-col bg-background text-foreground relative"
      >
        <ThemeProvider>
          <Header />
          <main className="flex-1 relative z-10">{children}</main>
          <ToastContainer
            position="top-right"
            autoClose={3500}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            pauseOnHover
            draggable
            theme="colored"
          />
        </ThemeProvider>
      </body>
    </html>
  )
}
