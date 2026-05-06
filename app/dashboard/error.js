'use client'
import { useEffect } from 'react'
import Link from 'next/link'
export default function Error({ error, reset }) {
  useEffect(() => { console.error('Dashboard error:', error) }, [error])
  return <div className="error-card"><h2>Помилка в dashboard</h2><p>{error.message}</p><div className="actions"><button onClick={reset} className="btn primary">Спробувати знову</button><Link href="/" className="btn secondary">На головну</Link></div></div>
}
