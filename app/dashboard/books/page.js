import Link from 'next/link'
import { books } from '@/lib/books'
export const metadata = { title: 'Управління книгами' }
export default function BooksListPage() {
  return <div><div className="row"><h1>Книги</h1><Link href="/dashboard/books/new" className="btn">+ Додати книгу</Link></div><div className="table-wrap"><table><thead><tr><th>Назва</th><th>Автор</th><th>Жанр</th><th>Рік</th><th>Статус</th><th>Дії</th></tr></thead><tbody>{books.map((book) => <tr key={book.id}><td>{book.emoji} <strong>{book.title}</strong></td><td>{book.author}</td><td>{book.genre}</td><td>{book.year}</td><td>{book.available ? <span className="badge green">Доступна</span> : <span className="badge red">Немає</span>}</td><td><Link href={`/dashboard/books/${book.id}`}>Переглянути</Link></td></tr>)}</tbody></table></div></div>
}
