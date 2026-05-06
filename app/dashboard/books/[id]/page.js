import Link from "next/link";
import { notFound } from "next/navigation";
import { getBookById } from "@/lib/books";

export default async function BookDetailPage({ params }) {
  const { id } = await params;
  const book = getBookById(id);
  if (!book) notFound();
  return (
    <div>
      <Link href="/dashboard/books" className="link">← Назад до списку</Link>
      <div className="details">
        <div className="row"><h1>{book.emoji} {book.name}</h1><div><button className="btn green">Редагувати</button> <button className="btn red">Видалити</button></div></div>
        <div className="two-col">
          <p><b>Автор:</b> {book.author}</p><p><b>Жанр:</b> {book.category}</p><p><b>Рік:</b> {book.year}</p><p><b>Сторінок:</b> {book.pages}</p><p><b>Наявність:</b> {book.available ? "Доступна" : "Немає"}</p>
        </div>
        <h3>Опис</h3><p>{book.description}</p>
      </div>
    </div>
  );
}
