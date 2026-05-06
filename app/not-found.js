import Link from 'next/link'
export default function NotFound() {
  return <div className="not-found"><div className="big">📚</div><h1>404</h1><p>Ой! Цю сторінку або книгу не знайдено.</p><Link href="/" className="btn">На головну</Link></div>
}
