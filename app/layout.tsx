import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kidscareplus',
  description: 'KIDS CARE PLUS vừa bổ sung Canxi, Phospho, D3, K2 làm nguyên liệu cho quá trình tạo xương, vừa chứa thành phần CBP kích thích nguyên bào xương phát triển, nhờ ...',
  icons: {
    icon: [
      {
        rel: 'icon',
        url: '/favicon.ico'
      }
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
