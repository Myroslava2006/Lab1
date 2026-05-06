export function PostSkeleton() {
  return <div className="card skeleton-card"><div className="sk sk-title"></div><div className="sk sk-line"></div><div className="sk sk-line"></div><div className="sk sk-line short"></div><div className="sk sk-small"></div></div>
}

export function StatSkeleton() {
  return <div className="stat-card skeleton-card"><div className="sk sk-small"></div><div className="sk sk-number"></div></div>
}

export function TableSkeleton({ rows = 5 }) {
  return <div className="table-wrap skeleton-card"><table><thead><tr>{[...Array(5)].map((_, i) => <th key={i}><div className="sk sk-small"></div></th>)}</tr></thead><tbody>{[...Array(rows)].map((_, i) => <tr key={i}>{[...Array(5)].map((_, j) => <td key={j}><div className="sk sk-line"></div></td>)}</tr>)}</tbody></table></div>
}
