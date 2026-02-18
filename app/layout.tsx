import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'XYN - 女装精品店',
  description: '精选女装，蕾丝束腰马甲，时尚背心',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-TW">
      <body>{children}</body>
    </html>
  )
}
