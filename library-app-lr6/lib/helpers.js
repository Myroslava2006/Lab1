import { books } from './books'

export function getBookStats() {
  const total = books.length
  const available = books.filter(b => b.available).length
  const unavailable = total - available
  const categories = [...new Set(books.map(b => b.category))]
  const avgPages = Math.round(books.reduce((sum, b) => sum + b.pages, 0) / total)
  return { total, available, unavailable, categoriesCount: categories.length, avgPages }
}
