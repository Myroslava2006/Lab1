'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function NewBookPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({ title: '', author: '', genre: '', year: '', description: '' })
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })
  const handleSubmit = (e) => { e.preventDefault(); console.log('Створення книги:', formData); router.push('/dashboard/books') }
  return <div><Link href="/dashboard/books">← Назад до списку</Link><form onSubmit={handleSubmit} className="form" style={{ marginTop: 16 }}><h1>Додати нову книгу</h1><div className="grid2"><div className="field"><label>Назва *</label><input className="input" name="title" value={formData.title} onChange={handleChange} required /></div><div className="field"><label>Автор *</label><input className="input" name="author" value={formData.author} onChange={handleChange} required /></div><div className="field"><label>Жанр *</label><input className="input" name="genre" value={formData.genre} onChange={handleChange} required /></div><div className="field"><label>Рік *</label><input className="input" type="number" name="year" value={formData.year} onChange={handleChange} required /></div></div><div className="field"><label>Опис</label><textarea className="textarea" name="description" rows="4" value={formData.description} onChange={handleChange} /></div><div className="actions"><button className="btn" type="submit">Створити</button><Link href="/dashboard/books" className="btn gray">Скасувати</Link></div></form></div>
}
