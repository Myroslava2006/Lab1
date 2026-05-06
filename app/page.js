import Link from "next/link";
import BookCard from "@/components/BookCard";
import { books } from "@/lib/books";

export default function Home() {
  const popularBooks = books.slice(0, 3);
  return (
    <div>
      <section className="hero">
        <div className="container">
          <h1>Система управління бібліотекою</h1>
          <p>Адміністратор керує каталогом книг, а читачі переглядають книги та створюють бронювання.</p>
          <Link href="/catalog" className="btn">Перейти до каталогу</Link>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <h2>Популярні книги</h2>
          <div className="grid">{popularBooks.map(book => <BookCard key={book.id} {...book} />)}</div>
        </div>
      </section>
    </div>
  );
}
