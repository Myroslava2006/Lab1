'use client'

import { useSession } from 'next-auth/react'
import Link from 'next/link'

export default function DashboardPage() {
  const { data: session, status } = useSession()

  if (status === 'loading') {
    return <main className="container mx-auto px-4 py-10">Завантаження...</main>
  }

  if (!session) {
    return (
      <main className="container mx-auto px-4 py-10">
        <h1 className="text-2xl font-bold mb-4">Кабінет читача</h1>
        <p className="mb-4">Щоб переглянути кабінет, потрібно увійти.</p>
        <Link href="/auth/login" className="text-blue-700 hover:underline">Увійти</Link>
      </main>
    )
  }

  return (
    <main className="container mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-4">Кабінет читача</h1>
      <p>Вітаємо, {session.user.name}!</p>
      <p>Email: {session.user.email}</p>
      <p>Роль: {session.user.role}</p>
    </main>
  )
}
