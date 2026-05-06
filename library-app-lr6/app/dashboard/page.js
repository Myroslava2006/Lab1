import StatsCard from '@/components/StatsCard'
import { getBookStats } from '@/lib/helpers'
export const metadata = { title: 'Dashboard' }
export default function DashboardPage(){ const stats = getBookStats(); return <div><h1>Огляд</h1><div className="stats"><StatsCard title="Книг у каталозі" value={stats.total}/><StatsCard title="Доступні" value={stats.available}/><StatsCard title="Категорій" value={stats.categoriesCount}/><StatsCard title="Середньо сторінок" value={stats.avgPages}/></div><div className="notice"><b>LR6:</b> Dashboard книг підключений до API Routes: GET, POST, PUT, DELETE.</div></div> }
