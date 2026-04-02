import type { ReactNode } from 'react'
import { Manrope } from 'next/font/google'
import '../globals.css'

const manrope = Manrope({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-manrope',
  weight: ['300', '400', '600', '800'],
})

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${manrope.variable} h-full`}>
      <body className="min-h-full antialiased" style={{ fontFamily: 'var(--font-body)', background: 'var(--color-background)', color: 'var(--color-on-surface)' }}>
        {children}
      </body>
    </html>
  )
}
