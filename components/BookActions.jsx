'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function BookActions({ bookId }) {
  const [showConfirm, setShowConfirm] = useState(false)
  const router = useRouter()
  const handleDelete = () => {
    console.log(`Видалення книги ${bookId}`)
    setShowConfirm(false)
    router.push('/dashboard/books')
  }
  if (showConfirm) {
    return (
      <div className="actions">
        <span className="badge red">Видалити?</span>
        <button onClick={handleDelete} className="btn red">Так</button>
        <button onClick={() => setShowConfirm(false)} className="btn gray">Ні</button>
      </div>
    )
  }
  return (
    <div className="actions">
      <button className="btn">Редагувати</button>
      <button onClick={() => setShowConfirm(true)} className="btn red">Видалити</button>
    </div>
  )
}
