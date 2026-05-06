import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getBookById } from '@/lib/books'
import FavoriteButton from '@/components/FavoriteButton'

export async function generateMetadata({ params }) {
  const { id } = await params
  const book = getBookById(id)
  if (!book) return { title: 'Не знайдено' }
  return { title: book.title, description: book.description }
}

export default async function BookPage({ params }) {
  const { id } = await params
  const book = getBookById(id)
  if (!book) notFound()
  return (
    <div>
      <section className="hero">
        <div className="container details">
          <Link href="/catalog">← Назад до каталогу</Link>
          <div className="row" style={{ justifyContent: 'flex-start', marginTop: 20 }}>
            <span style={{ fontSize: 78 }}>{book.emoji}</span>
            <div>
              <div className="actions"><h1>{book.title}</h1><FavoriteButton bookId={book.id} /></div>
              <p>{book.author} · {book.genre}</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section"><div className="container details"><div className="details-panel"><div className="grid2"><div><h3>Рік видання</h3><p>{book.year}</p></div><div><h3>Сторінок</h3><p>{book.pages}</p></div><div><h3>Наявність</h3><p>{book.available ? 'Доступна' : 'Тимчасово немає'}</p></div><div><h3>Жанр</h3><p>{book.genre}</p></div></div><h3>Опис</h3><p>{book.description}</p></div></div></section>
    </div>
  )
}
