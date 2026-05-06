import Link from "next/link";

export default function BookCard({ id, name, author, description, year, pages, emoji, category, available = true }) {
  return (
    <div className={`card ${!available ? "dim" : ""}`}>
      <div className="card-emoji"><span>{emoji}</span></div>
      <div className="card-body">
        <div className="card-title">
          <h3>{name}</h3>
          {available ? <span className="badge ok">Доступна</span> : <span className="badge no">Немає</span>}
        </div>
        <p className="muted"><b>Автор:</b> {author}</p>
        <p>{description}</p>
        <div className="row">
          <span><b>{year}</b> рік · {pages} стор.</span>
          <span className="badge blue">{category}</span>
        </div>
        {id && <p><Link href={`/catalog/${id}`} className="link">Детальніше →</Link></p>}
      </div>
    </div>
  );
}
