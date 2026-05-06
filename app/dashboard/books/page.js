import Link from "next/link";
import { books } from "@/lib/books";

export const metadata = { title: "Управління книгами" };

export default function BooksListPage() {
  return (
    <div>
      <div className="row"><h1>Книги</h1><Link href="/dashboard/books/new" className="btn green">+ Додати книгу</Link></div>
      <div className="table-wrap"><table><thead><tr><th>Назва</th><th>Автор</th><th>Жанр</th><th>Рік</th><th>Статус</th><th>Дії</th></tr></thead><tbody>
        {books.map(book => <tr key={book.id}>
          <td>{book.emoji} <b>{book.name}</b></td><td>{book.author}</td><td>{book.category}</td><td>{book.year}</td>
          <td>{book.available ? <span className="badge ok">Доступна</span> : <span className="badge no">Немає</span>}</td>
          <td><Link href={`/dashboard/books/${book.id}`} className="link">Переглянути</Link></td>
        </tr>)}
      </tbody></table></div>
    </div>
  );
}
