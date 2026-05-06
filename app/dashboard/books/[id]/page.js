import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getBookById } from '@/lib/books'
import BookActions from '@/components/BookActions'

export default async function BookDetailPage({ params }) {
  const { id } = await params
  const book = getBookById(id)
  if (!book) notFound()
  return <div><Link href="/dashboard/books">← Назад до списку</Link><div className="details-panel" style={{ marginTop: 16 }}><div className="row"><div className="actions"><span style={{ fontSize: 54 }}>{book.emoji}</span><h1>{book.title}</h1></div><BookActions bookId={book.id} /></div><div className="grid2"><div><h3>Автор</h3><p>{book.author}</p></div><div><h3>Жанр</h3><p>{book.genre}</p></div><div><h3>Рік</h3><p>{book.year}</p></div><div><h3>Сторінок</h3><p>{book.pages}</p></div><div><h3>Статус</h3><p>{book.available ? 'Доступна' : 'Немає'}</p></div></div><h3>Опис</h3><p>{book.description}</p></div></div>
}
