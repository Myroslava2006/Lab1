import Link from 'next/link'
import FavoriteButton from './FavoriteButton'

export default function BookCard({ id, title, author, description, year, emoji, genre, available = true }) {
  return (
    <div className={`card ${!available ? 'dim' : ''}`}>
      <div className="book-cover"><span>{emoji}</span></div>
      <div className="card-body">
        <div className="card-head">
          <div>
            <h3>{title}</h3>
            <p className="muted small">{author}</p>
          </div>
          <div className="actions">
            {id && <FavoriteButton bookId={id} />}
            {available ? <span className="badge green">Доступна</span> : <span className="badge red">Немає</span>}
          </div>
        </div>
        <p className="muted small">{description}</p>
        <div className="row">
          <strong>{year}</strong>
          <div className="actions">
            <span className="badge">{genre}</span>
            {id && <Link href={`/catalog/${id}`} className="small"><strong>Детальніше →</strong></Link>}
          </div>
        </div>
      </div>
    </div>
  )
}
