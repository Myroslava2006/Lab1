'use client'
import { useState, useEffect, use } from 'react'
import Link from 'next/link'
import BookActions from '@/components/BookActions'

export default function BookDetailPage({ params }){
  const { id } = use(params)
  const [book,setBook]=useState(null)
  const [loading,setLoading]=useState(true)
  const [error,setError]=useState(null)
  useEffect(()=>{async function fetchBook(){try{const res=await fetch(`/api/books/${id}`); if(!res.ok){ if(res.status===404) throw new Error('Книгу не знайдено'); throw new Error('Помилка завантаження') } const data=await res.json(); setBook(data)}catch(e){setError(e.message)}finally{setLoading(false)}} fetchBook()},[id])
  if(loading) return <div className="spinner"></div>
  if(error) return <div><h1>404</h1><p>{error}</p><Link href="/dashboard/books">← До списку книг</Link></div>
  return <div><Link href="/dashboard/books" style={{color:'#166534'}}>← Назад до списку</Link><div className="card card-body" style={{marginTop:16}}><div className="row"><h1>{book.emoji} {book.title}</h1><BookActions bookId={book.id} bookTitle={book.title}/></div><p><b>Автор:</b> {book.author}</p><p><b>Категорія:</b> {book.category}</p><p><b>Рік:</b> {book.year}</p><p><b>Сторінок:</b> {book.pages}</p><p><b>Статус:</b> {book.available?'Доступна':'Немає'}</p><p>{book.description}</p></div></div>
}
