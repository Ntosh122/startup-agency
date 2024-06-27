import type { Metadata } from 'next'
import './globals.css'
import localFont from 'next/font/local'


export const metadata: Metadata = {
  title: 'Pixelab',
  description: 'Pixelab - Get started with templates for your business.',
}


const ageo = localFont({
  src: [
    {
      path: '../../public/font/AgeoPersonalUse.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/font/AgeoPersonalUse-Bold.otf',
      weight: '700',
      style: 'bold',
    },
    {
      path: '../../public/font/AgeoPersonalUse-ExtraBold.otf',
      weight: '850',
      style: 'extra-bold',
    },
    {
      path: '../../public/font/AgeoPersonalUse-Medium.otf',
      weight: '500',
      style: 'medium',
    },
  ],
})


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (   
    <html lang="en">
      <link rel="icon" href="../../public/images/epixelap_logo.png" sizes='any' />
      <body  className={ageo.className}>{children}</body>
    </html>
  )
}
