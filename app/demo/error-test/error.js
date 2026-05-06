'use client'
import { useEffect } from 'react'
export default function Error({ error, reset }) {
  useEffect(() => { console.error('Error caught:', error) }, [error])
  return <div className="center-page error-bg"><div className="error-card"><div className="big-icon">⚠️</div><h2>Виникла помилка</h2><p>{error.message}</p><button onClick={reset} className="btn primary">Спробувати знову</button></div></div>
}
