'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useSession, signOut } from 'next-auth/react'

const navLinks = [
  { href: '/', label: 'Головна' },
  { href: '/books', label: 'Книги' },
  { href: '/authors', label: 'Автори' },
  { href: '/contacts', label: 'Контакти' },
]

export default function Header() {
  const pathname = usePathname()
  const { data: session, status } = useSession()

  return (
    <header className="bg-blue-900 text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold hover:text-blue-200 transition">
          Онлайн-бібліотека
        </Link>

        <nav className="flex items-center gap-6">
          <ul className="flex gap-6">
            {navLinks.map((link) => {
              const isActive = link.href === '/' ? pathname === '/' : pathname.startsWith(link.href)

              return (
                <li key={link.href}>
                  <Link href={link.href} className={`transition ${isActive ? 'text-blue-300 font-semibold' : 'hover:text-blue-200'}`}>
                    {link.label}
                  </Link>
                </li>
              )
            })}
          </ul>

          {status === 'loading' ? (
            <span className="text-blue-200 text-sm">...</span>
          ) : session ? (
            <div className="flex items-center gap-4">
              <Link href="/dashboard" className="text-blue-200 hover:text-white transition">
                {session.user.name}
              </Link>
              <button onClick={() => signOut({ callbackUrl: '/' })} className="bg-blue-700 hover:bg-blue-600 px-3 py-1 rounded text-sm transition">
                Вийти
              </button>
            </div>
          ) : (
            <Link href="/auth/login" className="bg-blue-700 hover:bg-blue-600 px-4 py-2 rounded transition">
              Увійти
            </Link>
          )}
        </nav>
      </div>
    </header>
  )
}
