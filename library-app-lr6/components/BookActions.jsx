'use client'
import { useRouter } from 'next/navigation'

export default function BookActions({ bookId, bookTitle }) {
  const router = useRouter()
  async function handleDelete() {
    if (!confirm(`Видалити "${bookTitle}"?`)) return
    try {
      const response = await fetch(`/api/books/${bookId}`, { method: 'DELETE' })
      if (!response.ok) throw new Error('Помилка видалення')
      router.push('/dashboard/books')
      router.refresh()
    } catch (err) { alert(err.message) }
  }
  return <button onClick={handleDelete} className="btn red">Видалити</button>
}
