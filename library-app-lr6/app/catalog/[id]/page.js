import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getBookById } from '@/lib/books'
import FavoriteButton from '@/components/FavoriteButton'

export async function generateMetadata({ params }) { const { id } = await params; const book = getBookById(id); return book ? { title: book.title, description: book.description } : { title: 'Не знайдено' } }
export default async function BookPage({ params }) { const { id } = await params; const book = getBookById(id); if(!book) notFound(); return <div><section className="hero"><div className="container"><Link href="/catalog" style={{color:'#dcfce7'}}>← Назад до каталогу</Link><h1>{book.emoji} {book.title} <FavoriteButton bookId={book.id}/></h1><p>{book.author}</p></div></section><section className="section"><div className="container"><div className="card card-body"><p><b>Категорія:</b> {book.category}</p><p><b>Рік:</b> {book.year}</p><p><b>Сторінок:</b> {book.pages}</p><p><b>Наявність:</b> {book.available ? 'Доступна' : 'Немає'}</p><p>{book.description}</p></div></div></section></div> }
