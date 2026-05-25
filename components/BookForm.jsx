'use client'

import { useState } from 'react'
import Link from 'next/link'

const GENRES = ['Фентезі', 'Детектив', 'Роман', 'Наукова література', 'Історія', 'Інше']

export default function BookForm({
  initialData,
  onSubmit,
  submitLabel = 'Зберегти',
  isSubmitting,
  error,
}) {
  const [formData, setFormData] = useState({
    title: initialData?.title || '',
    author: initialData?.author || '',
    genre: initialData?.genre || '',
    year: initialData?.year || '',
    description: initialData?.description || '',
    available: initialData?.available ?? true,
  })

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit({
      ...formData,
      year: Number(formData.year),
    })
  }

  return (
    <>
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-6">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 font-bold mb-2">Назва книги *</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded focus:outline-none focus:border-amber-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-bold mb-2">Автор *</label>
            <input
              type="text"
              name="author"
              value={formData.author}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded focus:outline-none focus:border-amber-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-bold mb-2">Жанр *</label>
            <select
              name="genre"
              value={formData.genre}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded focus:outline-none focus:border-amber-500"
            >
              <option value="">Оберіть жанр</option>
              {GENRES.map((genre) => (
                <option key={genre} value={genre}>{genre}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-gray-700 font-bold mb-2">Рік видання *</label>
            <input
              type="number"
              name="year"
              value={formData.year}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded focus:outline-none focus:border-amber-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-gray-700 font-bold mb-2">Опис</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="4"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:border-amber-500"
          />
        </div>

        <label className="flex items-center gap-3 text-gray-700 font-bold">
          <input
            type="checkbox"
            name="available"
            checked={formData.available}
            onChange={handleChange}
            className="w-5 h-5"
          />
          Книга доступна
        </label>

        <div className="flex gap-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-amber-700 text-white px-6 py-3 rounded hover:bg-amber-800 font-bold disabled:opacity-50"
          >
            {isSubmitting ? 'Збереження...' : submitLabel}
          </button>
          <Link
            href="/dashboard/books"
            className="bg-gray-300 text-gray-700 px-6 py-3 rounded hover:bg-gray-400 font-bold inline-block"
          >
            Скасувати
          </Link>
        </div>
      </form>
    </>
  )
}
