'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function NewBookPage(){
  const router=useRouter()
  const [saving,setSaving]=useState(false)
  const [error,setError]=useState(null)
  async function handleSubmit(e){
    e.preventDefault(); setSaving(true); setError(null)
    const f=new FormData(e.target)
    const data={title:f.get('title'), author:f.get('author'), category:f.get('category'), genre:f.get('genre'), year:Number(f.get('year')), pages:Number(f.get('pages')), description:f.get('description'), emoji:f.get('emoji')||'📘', available:f.get('available')==='on'}
    try{ const res=await fetch('/api/books',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(data)}); if(!res.ok){const r=await res.json(); throw new Error(r.error || 'Помилка створення')} router.push('/dashboard/books') }catch(e){setError(e.message)}finally{setSaving(false)}
  }
  return <div><Link href="/dashboard/books" style={{color:'#166534'}}>← Назад до списку</Link><h1>Додати книгу</h1>{error&&<div className="error">{error}</div>}<form onSubmit={handleSubmit} className="form"><div className="field"><label>Назва *</label><input className="input" name="title" required/></div><div className="field"><label>Автор *</label><input className="input" name="author" required/></div><div className="field"><label>Категорія *</label><select className="select" name="category" required><option>Фантастика</option><option>Поезія</option><option>Наука</option><option>Історія</option><option>Художня література</option><option>Інше</option></select></div><div className="field"><label>Жанр</label><select className="select" name="genre"><option value="fiction">fiction</option><option value="non-fiction">non-fiction</option><option value="science">science</option><option value="history">history</option><option value="poetry">poetry</option><option value="other">other</option></select></div><div className="field"><label>Рік</label><input className="input" type="number" name="year" min="1000" defaultValue="2024"/></div><div className="field"><label>Сторінки</label><input className="input" type="number" name="pages" min="1" defaultValue="100"/></div><div className="field"><label>Emoji</label><input className="input" name="emoji" placeholder="📘"/></div><div className="field"><label>Опис</label><textarea name="description" rows="3"></textarea></div><label><input type="checkbox" name="available" defaultChecked/> Доступна</label><br/><br/><button className="btn" disabled={saving}>{saving?'Збереження...':'Створити книгу'}</button></form></div>
}
