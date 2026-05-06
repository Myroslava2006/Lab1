'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function BooksPage(){
  const [books,setBooks]=useState([])
  const [loading,setLoading]=useState(true)
  const [error,setError]=useState(null)
  async function fetchBooks(){ try{ setLoading(true); const res=await fetch('/api/books'); if(!res.ok) throw new Error('Помилка завантаження'); const data=await res.json(); setBooks(data); setError(null) }catch(e){ setError(e.message) }finally{ setLoading(false) } }
  useEffect(()=>{fetchBooks()},[])
  async function handleDelete(id){ if(!confirm('Видалити цю книгу?')) return; try{ const res=await fetch(`/api/books/${id}`,{method:'DELETE'}); if(!res.ok) throw new Error('Помилка видалення'); fetchBooks() }catch(e){ alert(e.message) } }
  if(loading) return <div className="spinner"></div>
  if(error) return <div className="error"><p>{error}</p><button className="btn" onClick={fetchBooks}>Спробувати знову</button></div>
  return <div><div className="row" style={{marginBottom:20}}><h1>Книги ({books.length})</h1><Link className="btn" href="/dashboard/books/new">+ Додати книгу</Link></div><div className="table-wrap"><table><thead><tr><th>Назва</th><th>Автор</th><th>Категорія</th><th>Рік</th><th>Статус</th><th>Дії</th></tr></thead><tbody>{books.map(book=><tr key={book.id}><td><Link style={{color:'#166534',fontWeight:700}} href={`/dashboard/books/${book.id}`}>{book.emoji} {book.title}</Link></td><td>{book.author}</td><td>{book.category}</td><td>{book.year}</td><td><span className={`badge ${book.available?'':'no'}`}>{book.available?'Доступна':'Немає'}</span></td><td><button className="btn red" onClick={()=>handleDelete(book.id)}>Видалити</button></td></tr>)}</tbody></table></div></div>
}
