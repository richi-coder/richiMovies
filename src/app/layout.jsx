import './globals.css'
import { Inter  } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], fallback: ['system-ui', 'monospace'] })

export const metadata = {
  title: 'richiTrailers',
  description: 'Using Next to clone a know app!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
