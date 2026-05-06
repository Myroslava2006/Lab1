const colorClasses = {
  amber: '#b45309',
  green: '#16a34a',
  blue: '#2563eb',
  red: '#dc2626',
}

export default function StatsCard({ title, value, color = 'amber' }) {
  return (
    <div className="stat">
      <h3 className="muted small">{title}</h3>
      <p className="num" style={{ color: colorClasses[color] || colorClasses.amber }}>{value}</p>
    </div>
  )
}
