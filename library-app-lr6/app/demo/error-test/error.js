'use client'
import { useEffect } from 'react'
export default function Error({error,reset}){useEffect(()=>console.error(error),[error]);return <div className="section"><div className="container error"><h2>Виникла помилка</h2><p>{error.message}</p><button className="btn" onClick={reset}>Спробувати знову</button></div></div>}
