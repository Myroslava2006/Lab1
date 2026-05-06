import Link from "next/link";
import BookCard from "@/components/BookCard";

const popularBooks = [
  { id: 1, name: "1984", description: "Антиутопія Джорджа Орвелла.", year: 1949, emoji: "📕", category: "Фантастика", available: true },
  { id: 2, name: "Кобзар", description: "Поезії Тараса Шевченка.", year: 1840, emoji: "📗", category: "Поезія", available: false },
  { id: 3, name: "Маленький принц", description: "Філософська казка для дітей і дорослих.", year: 1943, emoji: "⭐", category: "Художня література", available: true },
];

export default function Home() {
  return (
    <div>
      <section className="hero">
        <div className="container hero-inner">
          <h1>Система управління бібліотекою</h1>
          <p>Адміністратор керує каталогом книг, а читачі переглядають книги та створюють бронювання.</p>
          <Link href="/catalog" className="hero-button">Перейти до каталогу</Link>
        </div>
      </section>

      <section className="section light">
        <div className="container">
          <h2>Популярні книги</h2>
          <div className="cards-grid three">
            {popularBooks.map(book => (
              <BookCard key={book.id} {...book} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container features">
          <h2>Можливості системи</h2>
          <div className="feature-grid">
            <div className="feature"><span>🔎</span><h3>Пошук книг</h3><p>Швидкий пошук за назвою, описом та жанром.</p></div>
            <div className="feature"><span>📚</span><h3>Каталог</h3><p>Перегляд усіх книг бібліотеки та їх доступності.</p></div>
            <div className="feature"><span>✅</span><h3>Бронювання</h3><p>Можливість створювати бронювання потрібних книг.</p></div>
          </div>
        </div>
      </section>
    </div>
  );
}
