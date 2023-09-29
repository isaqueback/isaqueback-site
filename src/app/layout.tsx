import './globals.sass'
import { ReactNode } from 'react'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'

const inter = Inter({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

const sourceSansPro = localFont({
  src: [
    {
      path: './assets/fonts/SourceSansPro/SourceSansPro-ExtraLight.otf',
      weight: '200',
      style: 'normal',
    },
    {
      path: './assets/fonts/SourceSansPro/SourceSansPro-Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './assets/fonts/SourceSansPro/SourceSansPro-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './assets/fonts/SourceSansPro/SourceSansPro-Semibold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './assets/fonts/SourceSansPro/SourceSansPro-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './assets/fonts/SourceSansPro/SourceSansPro-Black.otf',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-source-sans-pro',
})

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en" className='scroll-smooth'>
      <body className={`overflow-x-hidden ${inter.variable} ${sourceSansPro.variable}`}>
        {children}
      </body>
    </html>
  )
}
