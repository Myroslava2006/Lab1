import Link from 'next/link'
import FavoriteButton from './FavoriteButton'

export default function BookCard({ id, title, author, description, year, pages, emoji, category, available = true }) {
  return (
    <div className={`card ${!available ? 'muted' : ''}`}>
      <div className="card-head"><span>{emoji}</span></div>
      <div className="card-body">
        <div className="card-top">
          <h3>{title}</h3>
          <div className="actions">{id && <FavoriteButton bookId={id}/>}<span className={`badge ${available ? '' : 'no'}`}>{available ? 'Доступна' : 'Немає'}</span></div>
        </div>
        <p><b>{author}</b></p>
        <p className="muted">{description}</p>
        <div className="row"><span>{year} • {pages} стор.</span><span className="badge">{category}</span></div>
        {id && <p><Link href={`/catalog/${id}`} style={{color:'#166534',fontWeight:700}}>Детальніше →</Link></p>}
      </div>
    </div>
  )
}
