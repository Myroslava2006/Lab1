export const metadata = { title: 'Бронювання' }
const reservations = [
  { id: 1, reader: 'Іван Петренко', book: '1984', status: 'Активне', date: '2024-01-15' },
  { id: 2, reader: 'Марія Коваль', book: 'Кобзар', status: 'Очікує', date: '2024-01-16' },
  { id: 3, reader: 'Олег Сидоренко', book: 'Гаррі Поттер', status: 'Повернено', date: '2024-01-17' },
]
export default function ReservationsPage() {
  return <div><h1>Бронювання</h1><div className="table-wrap"><table><thead><tr><th>Читач</th><th>Книга</th><th>Статус</th><th>Дата</th></tr></thead><tbody>{reservations.map((item) => <tr key={item.id}><td><strong>{item.reader}</strong></td><td>{item.book}</td><td><span className={`badge ${item.status === 'Повернено' ? 'green' : item.status === 'Активне' ? 'blue' : 'yellow'}`}>{item.status}</span></td><td>{item.date}</td></tr>)}</tbody></table></div></div>
}
