export default function BookCard({ name, description, year, emoji, category, available = true }) {
  return (
    <div className={`card ${!available ? "card-disabled" : ""}`}>
      <div className="card-emoji"><span>{emoji}</span></div>
      <div className="card-content">
        <div className="card-top">
          <h3>{name}</h3>
          {available ? (
            <span className="badge badge-green">Доступна</span>
          ) : (
            <span className="badge badge-red">Немає</span>
          )}
        </div>
        <p>{description}</p>
        <div className="card-bottom">
          <span className="year">{year} рік</span>
          <span className="category">{category}</span>
        </div>
      </div>
    </div>
  );
}
