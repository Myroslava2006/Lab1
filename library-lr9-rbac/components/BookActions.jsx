'use client'

import { useSession } from 'next-auth/react'

export default function BookActions({ bookId }) {
  const { data: session } = useSession()
  const isAdmin = session?.user?.role === 'admin'

  if (!isAdmin) return null

  const handleDelete = async () => {
    if (!confirm('Видалити книгу?')) return

    const res = await fetch(`/api/books/${bookId}`, { method: 'DELETE' })
    if (!res.ok) {
      const data = await res.json()
      alert(data.error || 'Помилка видалення')
      return
    }

    location.reload()
  }

  return (
    <button onClick={handleDelete} className="text-sm text-red-600 hover:text-red-800">
      Видалити
    </button>
  )
}
