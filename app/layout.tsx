import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Poppins } from 'next/font/google'
import { AccessibilityProvider } from '@/components/accessibility-provider'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'NeuroNest AI — Every Mind Learns Differently',
  description:
    'NeuroNest AI adapts lessons to every child’s learning style using Artificial Intelligence. Built for children with Dyslexia and ADHD, with accessibility at its core.',
  generator: 'v0.app',
  keywords: [
    'AI learning',
    'dyslexia',
    'ADHD',
    'accessible education',
    'personalized learning',
    'text to speech',
  ],
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f6f7ff' },
    { media: '(prefers-color-scheme: dark)', color: '#1a1830' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${poppins.variable} bg-background`}>
      <body className="font-sans antialiased">
        <AccessibilityProvider>{children}</AccessibilityProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
