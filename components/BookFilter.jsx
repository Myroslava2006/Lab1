'use client'
import { useState } from 'react'
import BookCard from './BookCard'
import { books, getGenres } from '@/lib/books'

const genres = getGenres()

export default function BookFilter() {
  const [search, setSearch] = useState('')
  const [activeGenre, setActiveGenre] = useState('Всі')
  const [showAvailableOnly, setShowAvailableOnly] = useState(false)

  const filteredBooks = books.filter((book) => {
    const text = `${book.title} ${book.author} ${book.description}`.toLowerCase()
    const matchesSearch = text.includes(search.toLowerCase())
    const matchesGenre = activeGenre === 'Всі' || book.genre === activeGenre
    const matchesAvailability = !showAvailableOnly || book.available
    return matchesSearch && matchesGenre && matchesAvailability
  })

  return (
    <div className="filter">
      <input className="input" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Пошук книги за назвою, автором або описом..." />
      <div className="chips">
        {genres.map((genre) => (
          <button key={genre} onClick={() => setActiveGenre(genre)} className={`chip ${activeGenre === genre ? 'active' : ''}`}>{genre}</button>
        ))}
      </div>
      <label className="small"><input type="checkbox" checked={showAvailableOnly} onChange={(e) => setShowAvailableOnly(e.target.checked)} /> Тільки доступні книги</label>
      <p className="muted small">Знайдено: {filteredBooks.length} з {books.length}</p>
      {filteredBooks.length > 0 ? <div className="grid">{filteredBooks.map((book) => <BookCard key={book.id} {...book} />)}</div> : <p className="not-found">Нічого не знайдено</p>}
    </div>
  )
}
