import Link from "next/link";
import { notFound } from "next/navigation";
import { getBookById } from "@/lib/books";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const book = getBookById(id);
  if (!book) return { title: "Книгу не знайдено" };
  return { title: book.name, description: book.description };
}

export default async function BookPage({ params }) {
  const { id } = await params;
  const book = getBookById(id);
  if (!book) notFound();

  return (
    <div>
      <section className="hero small"><div className="container">
        <Link href="/catalog" className="link">← Назад до каталогу</Link>
        <h1>{book.emoji} {book.name}</h1>
        <p>{book.author} · {book.category}</p>
      </div></section>
      <section className="section"><div className="container details">
        <div className="two-col">
          <div><h3>Рік видання</h3><p>{book.year}</p></div>
          <div><h3>Кількість сторінок</h3><p>{book.pages}</p></div>
          <div><h3>Наявність</h3><p>{book.available ? "Доступна" : "Немає в наявності"}</p></div>
          <div><h3>Жанр</h3><p>{book.category}</p></div>
        </div>
        <h3>Опис</h3><p>{book.description}</p>
      </div></section>
    </div>
  );
}
