import Link from "next/link";

export default function NotFound() {
  return (
    <div className="notfound">
      <div className="icon">📚</div>
      <h1>404</h1>
      <p>Ой! Цю сторінку або книгу не знайдено.</p>
      <Link href="/" className="btn green">На головну</Link>
    </div>
  );
}
