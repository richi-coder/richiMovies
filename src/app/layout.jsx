import './globals.css'
import { Inter,  } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], fallback: ['monospace', 'system-ui'] })

export const metadata = {
  title: 'richiMovies',
  description: 'Using Next to clone a know app!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        {children}
      </body>
    </html>
  )
}
