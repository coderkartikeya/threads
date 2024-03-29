import './styles/globals.css'
import { Inter } from 'next/font/google'
import { GlobalContextProvider } from './context/user'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Threads',
  description: 'used to share ideas and views',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GlobalContextProvider>{children}</GlobalContextProvider></body>
    </html>
  )
}
