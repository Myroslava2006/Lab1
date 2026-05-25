'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useSession } from 'next-auth/react'

export default function DashboardNav() {
  const pathname = usePathname()
  const { data: session } = useSession()
  const isAdmin = session?.user?.role === 'admin'

  const links = [
    { href: '/dashboard', label: 'Огляд' },
    { href: '/dashboard/books', label: 'Книги' },
    { href: '/dashboard/profile', label: 'Профіль' },
    ...(isAdmin ? [{ href: '/dashboard/users', label: 'Користувачі' }] : []),
  ]

  return (
    <nav className="bg-slate-900 text-white rounded-lg p-4 mb-6">
      <ul className="flex flex-wrap gap-2">
        {links.map((link) => {
          const isActive = link.href === '/dashboard' ? pathname === '/dashboard' : pathname.startsWith(link.href)

          return (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`block px-4 py-2 rounded transition ${
                  isActive ? 'bg-blue-700 text-white' : 'text-gray-200 hover:bg-slate-700'
                }`}
              >
                {link.label}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
