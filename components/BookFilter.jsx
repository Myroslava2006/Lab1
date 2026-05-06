'use client'
import { useState } from 'react'
import BookCard from './BookCard'
import { books, getCategories } from '@/lib/books'

const categories = getCategories()

export default function BookFilter() {
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState('Всі')
  const [showAvailableOnly, setShowAvailableOnly] = useState(false)

  const filteredBooks = books.filter(book => {
    const text = `${book.name} ${book.author} ${book.description}`.toLowerCase()
    const matchesSearch = text.includes(search.toLowerCase())
    const matchesCategory = activeCategory === 'Всі' || book.category === activeCategory
    const matchesAvailability = !showAvailableOnly || book.available
    return matchesSearch && matchesCategory && matchesAvailability
  })

  return (
    <div>
      <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Пошук книги за назвою, автором або описом..." className="filter-input" />
      <div className="filters">
        {categories.map(cat => <button key={cat} onClick={() => setActiveCategory(cat)} className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}>{cat}</button>)}
      </div>
      <label><input type="checkbox" checked={showAvailableOnly} onChange={(e) => setShowAvailableOnly(e.target.checked)} /> Тільки доступні книги</label>
      <p className="muted">Знайдено: {filteredBooks.length} з {books.length}</p>
      {filteredBooks.length > 0 ? <div className="grid">{filteredBooks.map(book => <BookCard key={book.id} {...book} />)}</div> : <p className="notfound">Нічого не знайдено</p>}
    </div>
  )
}
