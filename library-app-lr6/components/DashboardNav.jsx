'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/dashboard', label: 'Огляд' },
  { href: '/dashboard/books', label: 'Книги' },
  { href: '/dashboard/reservations', label: 'Бронювання' },
]

export default function DashboardNav() {
  const pathname = usePathname()
  return <nav>{links.map(l => <Link key={l.href} href={l.href} className={pathname === l.href || pathname.startsWith(l.href + '/') ? 'active' : ''}>{l.label}</Link>)}</nav>
}
