'use client'
import { useEffect } from 'react'
import Link from 'next/link'
export default function Error({error, reset}){useEffect(()=>{console.error('Dashboard error:',error)},[error]);return <div className="error"><h2>Помилка в dashboard</h2><p>{error.message}</p><button className="btn" onClick={reset}>Спробувати знову</button> <Link className="btn gray" href="/">На головну</Link></div>}
