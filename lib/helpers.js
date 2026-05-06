import { books } from './books'

export function getBookStats() {
  const total = books.length
  const available = books.filter((book) => book.available).length
  const unavailable = total - available
  const genres = [...new Set(books.map((book) => book.genre))]
  const avgPages = Math.round(books.reduce((sum, book) => sum + book.pages, 0) / total)
  return { total, available, unavailable, genresCount: genres.length, avgPages }
}
