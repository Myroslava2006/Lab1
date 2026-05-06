'use client'

import { useState } from 'react'
import BookCard from './BookCard'

const books = [
  { id: 1, name: "1984", description: "Антиутопія Джорджа Орвелла про тоталітарне суспільство.", year: 1949, emoji: "📕", category: "Фантастика", available: true },
  { id: 2, name: "Кобзар", description: "Збірка поезій Тараса Шевченка.", year: 1840, emoji: "📗", category: "Поезія", available: false },
  { id: 3, name: "Гаррі Поттер", description: "Фентезійна історія про школу магії.", year: 1997, emoji: "🪄", category: "Фантастика", available: true },
  { id: 4, name: "Коротка історія часу", description: "Науково-популярна книга Стівена Гокінга.", year: 1988, emoji: "🌌", category: "Наука", available: true },
  { id: 5, name: "Маленький принц", description: "Філософська казка Антуана де Сент-Екзюпері.", year: 1943, emoji: "⭐", category: "Художня література", available: true },
  { id: 6, name: "Історія України", description: "Книга про ключові події української історії.", year: 2015, emoji: "🏛️", category: "Історія", available: false },
  { id: 7, name: "Мистецтво війни", description: "Класичний трактат про стратегію та мислення.", year: 1500, emoji: "📘", category: "Історія", available: true },
  { id: 8, name: "Основи програмування", description: "Навчальний посібник для початківців.", year: 2022, emoji: "💻", category: "Наука", available: true },
]

const categories = ["Всі", ...new Set(books.map(book => book.category))]

export default function BookFilter() {
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState('Всі')
  const [showAvailableOnly, setShowAvailableOnly] = useState(false)

  const filteredBooks = books.filter(book => {
    const text = `${book.name} ${book.description}`.toLowerCase()
    const matchesSearch = text.includes(search.toLowerCase())
    const matchesCategory = activeCategory === 'Всі' || book.category === activeCategory
    const matchesAvailability = !showAvailableOnly || book.available
    return matchesSearch && matchesCategory && matchesAvailability
  })

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Пошук книги за назвою або описом..."
        className="search-input"
      />

      <div className="filter-buttons">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={activeCategory === cat ? 'filter-btn active' : 'filter-btn'}
          >
            {cat}
          </button>
        ))}
      </div>

      <label className="checkbox-line">
        <input
          type="checkbox"
          checked={showAvailableOnly}
          onChange={(e) => setShowAvailableOnly(e.target.checked)}
        />
        <span>Тільки доступні книги</span>
      </label>

      <p className="count">Знайдено: {filteredBooks.length} з {books.length}</p>

      {filteredBooks.length > 0 ? (
        <div className="cards-grid">
          {filteredBooks.map(book => (
            <BookCard key={book.id} {...book} />
          ))}
        </div>
      ) : (
        <p className="empty">Нічого не знайдено</p>
      )}
    </div>
  )
}
