'use client'

import { useRouter } from 'next/navigation'

export default function BookActions({ bookId }) {
  const router = useRouter()

  const handleEdit = () => {
    router.push(`/dashboard/books/${bookId}/edit`)
  }

  const handleDelete = async () => {
    const confirmed = confirm('Ви впевнені, що хочете видалити цю книгу?')
    if (!confirmed) return

    const response = await fetch(`/api/books/${bookId}`, {
      method: 'DELETE',
    })

    if (response.ok) {
      router.push('/dashboard/books')
      router.refresh()
    } else {
      alert('Помилка видалення книги')
    }
  }

  return (
    <div className="flex gap-4">
      <button
        onClick={handleEdit}
        className="bg-amber-700 text-white px-4 py-2 rounded hover:bg-amber-800 font-bold"
      >
        Редагувати
      </button>
      <button
        onClick={handleDelete}
        className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 font-bold"
      >
        Видалити
      </button>
    </div>
  )
}
