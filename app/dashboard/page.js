import { books } from "@/lib/books";
import { reservations } from "@/lib/reservations";

export default function DashboardPage() {
  const available = books.filter(b => b.available).length;
  const active = reservations.filter(r => r.status === "active").length;
  return (
    <div>
      <h1>Огляд Dashboard</h1>
      <p className="muted">Адмін-панель бібліотеки.</p>
      <div className="stats">
        <div className="stat"><strong>{books.length}</strong><p>Усього книг</p></div>
        <div className="stat"><strong>{available}</strong><p>Доступні книги</p></div>
        <div className="stat"><strong>{reservations.length}</strong><p>Бронювання</p></div>
        <div className="stat"><strong>{active}</strong><p>Активні бронювання</p></div>
      </div>
    </div>
  );
}
