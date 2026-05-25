'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useSession, signOut } from 'next-auth/react'

const navLinks = [
  { href: '/', label: 'Головна' },
  { href: '/books', label: 'Книги' },
  { href: '/dashboard', label: 'Кабінет' },
]

export default function Header() {
  const pathname = usePathname()
  const { data: session, status } = useSession()

  return (
    <header className="bg-blue-900 text-white py-4">
      <div className="container px-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold hover:text-blue-200 transition">
          Бібліотека
        </Link>

        <nav className="flex items-center gap-6">
          <ul className="flex gap-6">
            {navLinks.map((link) => {
              const isActive = link.href === '/' ? pathname === '/' : pathname.startsWith(link.href)

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`transition ${isActive ? 'text-blue-300 font-semibold' : 'hover:text-blue-200'}`}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            })}
          </ul>

          {status === 'loading' ? (
            <span className="text-blue-200 text-sm">...</span>
          ) : session ? (
            <div className="flex items-center gap-3 ml-4 pl-4 border-l border-blue-700">
              <Link href="/dashboard" className="text-blue-200 hover:text-white transition text-sm">
                {session.user.name}
              </Link>
              <span
                className={`text-xs px-2 py-0.5 rounded-full ${
                  session.user.role === 'admin' ? 'bg-red-500 text-white' : 'bg-blue-600 text-blue-100'
                }`}
              >
                {session.user.role}
              </span>
              <button
                onClick={() => signOut({ callbackUrl: '/' })}
                className="bg-blue-700 hover:bg-blue-600 px-3 py-1 rounded text-sm transition"
              >
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
