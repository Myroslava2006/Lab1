import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { FavoritesProvider } from '@/contexts/FavoritesContext'

export const metadata = {
  title: { default: 'Система управління бібліотекою', template: '%s | Бібліотека' },
  description: 'Каталог книг, бронювання та dashboard для бібліотеки',
}

export default function RootLayout({ children }) {
  return <html lang="uk"><body><div className="layout"><FavoritesProvider><Header/><main className="main">{children}</main><Footer/></FavoritesProvider></div></body></html>
}
