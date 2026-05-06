import { reservations } from '@/lib/reservations'
export const metadata={title:'Бронювання'}
export default function ReservationsPage(){return <div><h1>Бронювання книг</h1><div className="table-wrap"><table><thead><tr><th>Читач</th><th>Книга</th><th>Статус</th><th>Дата видачі</th><th>Дата повернення</th></tr></thead><tbody>{reservations.map(r=><tr key={r.id}><td>{r.reader}</td><td>{r.bookTitle}</td><td><span className="badge">{r.status}</span></td><td>{r.borrowDate}</td><td>{r.returnDate}</td></tr>)}</tbody></table></div></div>}
