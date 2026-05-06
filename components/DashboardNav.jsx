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
  return <nav>{links.map((link) => <Link key={link.href} href={link.href} className={pathname === link.href || (link.href !== '/dashboard' && pathname.startsWith(link.href)) ? 'active' : ''}>{link.label}</Link>)}</nav>
}
