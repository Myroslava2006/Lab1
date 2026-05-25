import './globals.css'
import AuthProvider from '@/components/AuthProvider'
import Header from '@/components/Header'

export const metadata = {
  title: 'Бібліотека | Онлайн-каталог',
  description: 'Система керування бібліотекою та каталогом книг',
}

export default function RootLayout({ children }) {
  return (
    <html lang="uk">
      <body>
        <AuthProvider>
          <Header />
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}
