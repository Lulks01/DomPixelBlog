import type { Metadata } from 'next'

import './globals.css'

export const metadata: Metadata = {
  title: 'DomPixelBlog',
  description: 'Dom Pixel Web & Mobile Solutions',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body>
        <header>
           <a href="#" id='home'>Home</a>
            <h1>DomPixelBlog</h1>
            <a href="#">About</a>
        </header>
        {children}
      </body>
    </html>
  )
}

 
