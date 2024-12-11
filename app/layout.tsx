import type { Metadata } from 'next'
import './globals.css'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "react-datepicker/dist/react-datepicker.css";
import 'react-toastify/dist/ReactToastify.css';
import Header from '@/components/Header'
import Footer from '@/components/Footer';
import { Montserrat } from 'next/font/google';
import Script from 'next/script';

const montserrat = Montserrat({
  weight: '500',
  subsets: ['latin']
})

export const metadata: Metadata = {
  metadataBase: new URL('https://wowtop.co.nz'),
  title: 'Wowtop',
  description: 'WOWTOP vừa bổ sung Canxi, Phospho, D3, K2 làm nguyên liệu cho quá trình tạo xương, vừa chứa thành phần CBP kích thích nguyên bào xương phát triển, nhờ ...',
  keywords: 'Wowtop',
  robots: {
    follow: true,
    index: true,
  },
  openGraph: {
    locale: 'vi_VN',
    title: 'Wowtop',
    url: 'https://wowtop.co.nz/',
    siteName: 'Wowtop',
    type: 'website',
    images: [
      {
        url: 'https://wowtop.co.nz/logo.png',
        width: 380,
        height: 210,
        alt: 'Wowtop thumbnail',
      },
    ],
  },
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
      <head>
        {/* Google Ads Conversion Script */}
        <Script
          id="google-ads-script"
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=AW-16773984613"
        />
        <Script id="google-ads-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16773984613');
          `}
        </Script>
      </head>
      <body className={montserrat.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
