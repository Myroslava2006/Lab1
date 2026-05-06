import StatsCard from '@/components/StatsCard'
import { getBookStats } from '@/lib/helpers'
export const metadata = { title: 'Dashboard' }
export default function DashboardPage() {
  const stats = getBookStats()
  return <div><h1>Огляд</h1><div className="stats"><StatsCard title="Книг у каталозі" value={stats.total} color="amber" /><StatsCard title="Доступні" value={stats.available} color="green" /><StatsCard title="Жанрів" value={stats.genresCount} color="blue" /><StatsCard title="Середньо сторінок" value={stats.avgPages} color="red" /></div></div>
}
