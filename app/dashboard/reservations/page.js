import { reservations } from "@/lib/reservations";

export const metadata = { title: "Бронювання" };

function statusClass(status) {
  if (status === "active") return "badge ok";
  if (status === "pending") return "badge yellow";
  if (status === "returned") return "badge blue";
  return "badge no";
}

export default function ReservationsPage() {
  return (
    <div>
      <h1>Бронювання</h1>
      <div className="table-wrap"><table><thead><tr><th>Читач</th><th>Книга</th><th>Статус</th><th>Дата видачі</th><th>Дата повернення</th></tr></thead><tbody>
        {reservations.map(r => <tr key={r.id}><td><b>{r.reader}</b></td><td>{r.book}</td><td><span className={statusClass(r.status)}>{r.status}</span></td><td>{r.borrowDate}</td><td>{r.returnDate}</td></tr>)}
      </tbody></table></div>
    </div>
  );
}
