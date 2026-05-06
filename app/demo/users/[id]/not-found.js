import Link from 'next/link'
export default function NotFound() {
  return <div className="center-page"><div className="text-center"><h1>404</h1><h2>Користувача не знайдено</h2><p>Користувач з таким ID не існує.</p><Link href="/demo/users/1" className="btn primary">До користувача #1</Link></div></div>
}
