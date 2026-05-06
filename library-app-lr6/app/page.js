import Link from 'next/link'
import BookCard from '@/components/BookCard'
import { books } from '@/lib/books'

export default function Home() {
  return <div><section className="hero"><h1>Система управління бібліотекою</h1><p>Адміністратор керує каталогом книг, а читачі переглядають книги та створюють бронювання.</p><Link className="btn light" href="/catalog">Перейти до каталогу</Link></section><section className="section"><div className="container"><h2 style={{textAlign:'center'}}>Популярні книги</h2><div className="grid">{books.slice(0,3).map(book => <BookCard key={book.id} {...book}/>)}</div></div></section></div>
}
